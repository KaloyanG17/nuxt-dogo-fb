<template>
   <div class="card">
      <div class="grid grid-cols-2 gap-10">
         <div class="p-7">
            <img :src="product.image" alt="product img" class="mx-auto my-7">
         </div>
         <div class="p-7">
            <h2 class="text-4xl my-7"> {{ product.title }}</h2>
            <p class="text-xl my-7">Price - ${{ product.price }}</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Product description: </h3>
            <p class="mb-7">{{  product.description }}</p>
            <button class='btn flex' @click="addProduct">
               <i class="material-symbols-outlined mr-2">shopping_cart</i>
               <span>Add to cart</span>
            </button>
         </div>
      </div>
   </div>
</template>

<script setup>
import  {useMainStore} from '../store/index.js'
const { product } = defineProps(['product'])

const mainStore = useMainStore();

const addProduct = () => {
   mainStore.addToCart(product);
}

</script>

<style  scoped>
img {
   max-width: 400px;
}
</style>