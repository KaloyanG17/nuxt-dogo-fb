<template>
   <div>
      <h1>Welcome to your Account</h1>
      <p>Email: {{ $route.params.id }}</p>
   </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
</script>