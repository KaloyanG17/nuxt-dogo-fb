<template>
   <div class="card text-center">
      <img :src="website.image" alt="product thumb" class="thumb">
      <p class="font-bold text-gray-500 m-4 truncate">{{ website.title }}</p>
      <a :href="website.link">
         <p class="btn my-4">View Website</p>
      </a>
      <a :href="website.github">
         <p class="btn my-4" style="background-color: grey;">View Github Code</p>
      </a>
   </div>
</template>

<script setup>

const { website } = defineProps(['website'])

</script>

<style scoped>
.thumb {
   max-height: 120px;
   max-width: 70%;
   margin: 0 auto;
}
</style>