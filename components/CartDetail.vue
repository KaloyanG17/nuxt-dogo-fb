<template>
   <div class="cart">
      <img :src="product.image" alt="product thumb">
      <div class="product-details">
         <p class="product-title">{{ product.title }} Price - ${{ product.price.toFixed(2) }}</p>
      </div>
         <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4 details-link">View Details</p>
         </NuxtLink>
         <button class="btn details" @click="mainStore.addToCart(product)"> + </button>
         <p class="details"> {{ product.quantity }}</p>
         <button class="btn details" @click="mainStore.deleteProduct(product.id)"> - </button>
   </div>
 </template>

<script setup>
import { useMainStore } from '~~/store/index.js'
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { deleteProduct, addToCart} = storeToRefs(mainStore)
const filter = ref('all')

const { product } = defineProps(['product'])

</script>
 
 <style scoped>
 .cart {
   display: flex;
   align-items: center;
   padding: 1rem;
   border: 1px solid #ccc;
   border-radius: 5px;

 }
 
 .cart img {
   max-width: 2000px;
   max-height: 180px;
   margin-right: 1rem;
 }
 
 .product-details {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   margin-right: 30px;
 }

 .details-link{
   margin-right: 20px;
 }

 .details {
   margin-left: 5px;
   margin-right: 5px;
 }


 </style>
 
