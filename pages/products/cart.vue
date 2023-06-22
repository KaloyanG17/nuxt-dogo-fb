<template>
   <div>
      <div class="price">
         <p>Total Price: ${{ totalPrice.toFixed(2) }}</p>
      </div>
      <div v-for="product in cart">
         <CartDetail :product="product" />
      </div>

   </div>
</template>

<script setup>
import { useMainStore } from '~~/store/index.js'
import { storeToRefs } from 'pinia';
import CartDetail from '~/components/CartDetail.vue';
import jsonData from '~/content/index.json';

const mainStore = useMainStore();
const { cart, getCart, totalCount, totalPrice , getQuanity} = storeToRefs(mainStore)
mainStore.getCart()
const filter = ref('all')

const res = jsonData.products

definePageMeta({
    layout: 'products'
})
</script>

<style scoped>
.price {
   display: flex;
   justify-content: flex-end;
   margin: 1rem;
}
</style>