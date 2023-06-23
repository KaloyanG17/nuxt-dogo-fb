import { defineStore } from 'pinia';
import axios from 'axios'
// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export const useMainStore = defineStore('main', {
   state: () => ({
      cart: [],
      loading: false,
      total: 0,
   }),
   getters: {
      totalCount: (state) => {
         return state.cart.length
      },
      totalPrice: (state) => {
         return state.total
      },
   },

   actions: {
      getCartTotal(cart) {
         let total = 0
         cart.forEach(element => {
            total += +(element.price * element.quantity)
         });
         return total
      },

      async addToCart(cart) {
         const quantityCheck = this.getQuantity(cart.id)
         const products = { ...cart, quantity: quantityCheck + 1 }

         if (quantityCheck > 0) {
            const index = this.cart.findIndex(t => t.id === cart.id)
            this.cart[index].quantity = quantityCheck + 1
            this.total += +cart.price
            axios.put('https://nuxt-dojo-c7fc1-default-rtdb.europe-west1.firebasedatabase.app/cart/' + this.cart[index].idName + '.json', products)
            .then(response => console.log(response))
            .catch(err => console.log(err))
            if (res.error) {
               console.log(res.error)
             }

         } else {
            this.total += +cart.price
            axios.post('https://nuxt-dojo-c7fc1-default-rtdb.europe-west1.firebasedatabase.app/cart.json', products)
            .then(res => this.cart.push({ ...products, idName: res.data.name}))
            .catch(err => console.log(err))
   
            if (res.error) {
               console.log(res.error)
            }
         }
      },

      async getCart() {
         this.loading = true
         axios.get('https://nuxt-dojo-c7fc1-default-rtdb.europe-west1.firebasedatabase.app/cart.json')
         .then(res => {
            const cartArray = []
            for (const key in res.data) {
               cartArray.push({ ...res.data[key], idName: key })
            }
            this.cart = cartArray
            this.total = this.getCartTotal(this.cart)
         })
         .catch(err => console.log(err))
         this.loading = false

         if (res.error) {
            console.log(res.error)
          }
      },

      async deleteProduct(id) {
         const index = this.cart.findIndex(t => t.id === id)
         if( this.cart[index].quantity > 1) {
            this.total -= this.cart[index].price;
            this.cart[index].quantity -= 1
            const product = { ...this.cart[index] }
            // Now working JSON edit 
            axios.put('https://nuxt-dojo-c7fc1-default-rtdb.europe-west1.firebasedatabase.app/cart/' + this.cart[index].idName + ".json", product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            if (res.error) {
               console.log(res.error)
             }
         } else {

            // Now working JSON delete
            axios.delete('https://nuxt-dojo-c7fc1-default-rtdb.europe-west1.firebasedatabase.app/cart/' + this.cart[index].idName + '.json')
            .then(res => console.log('Resource deleted successfully:', res.data),
               this.total -= this.cart[index].price,
               this.cart.splice(index, 1),
            )
            .catch(err => console.log(err))

            if (res.error) {
               console.log(res.error)
             }
         }
      },
      
      getQuantity(id) {
         const product = this.cart.find(t => {
           return t.id === id
         })
         return product ? product.quantity : 0
      }
   }
})