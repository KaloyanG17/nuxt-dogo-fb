<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/products/cart" class="btn">Cart ({{ totalCount  }})</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import { useMainStore } from '~~/store/index.js'
import { storeToRefs } from 'pinia';

const taskStore = useMainStore();
const { totalCount, getCart} = storeToRefs(taskStore);
taskStore.getCart()

const filter = ref('all')

</script>

<style scoped>

</style>