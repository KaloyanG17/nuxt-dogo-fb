<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '~~/store/index.js'
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { cart, getCart, totalCount, totalPrice } = storeToRefs(mainStore)
mainStore.getCart()
const filter = ref('all')


definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
        {name: 'description', content: 'Nuxt 3 Merch'}
    ]
})
</script>

<style  scoped>

</style>