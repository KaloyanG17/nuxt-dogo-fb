<template>
<div>
   <div v-if="loginToggle">
      <AccountLogin :showNav.sync="showNav"  />
      <br>
      <hr>
      <br>
      <button class="btn" @click="loginToggle = !loginToggle">Sign Up Form</button>
   </div>
   <div v-else>
      <AccountSignup />
      <br>
      <hr>
      <br>
      <button class="btn" @click="loginToggle = !loginToggle">Log in Form</button>
   </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMainStore } from '~/store';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { deleteProduct, addToCart} = storeToRefs(mainStore)
const filter = ref('all')

const loginToggle = ref(true)

const accountInfos = [];

const showNav = [];

console.log(showNav)

const router = useRouter()


// const loginData = (accountInfo) => {
//    console.log("here " + accountInfo)
//    accountInfos.push(accountInfo)
//    console.log(accountInfos)
// }


definePageMeta({
    layout: 'products'
})

</script>