<template>
<div>
   <h1 class="text-2xl font-bold mb-4">Sign Up</h1>
   <div v-if="signupSuccess" class="mt-4 text-green-500">
      Signup successful!
      <br>
    </div>
   <form @submit.prevent="signupClick">
      <div class="mb-4">
         <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
         <input v-model="email" type="email" id="email" name="email" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="mb-4">
         <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
         <input v-model="password" type="password" id="password" name="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="flex items-center justify-between">
         <button type="submit" class="btn">Sign Up</button>
      </div>
   </form>
   <div>
      <slot />
   </div>
</div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMainStore } from '~/store';
import axios from 'axios';
const API_KEY = "AIzaSyDI3CfOundefPXQT5ovktSKqHB3avoKcoM";

const mainStore = useMainStore();
const { signup } = storeToRefs(mainStore)
const filter = ref('all')

const email = ref('');
const password = ref('');
const signupSuccess = ref(false);

const signupClick = () => {
   axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDI3CfOundefPXQT5ovktSKqHB3avoKcoM', {
      email: email.value,
      password: password.value,
      returnSecureToken: true
   })
   .then(res =>       
      email.value = '',
      password.value = '',
      signupSuccess.value = true,
   )
   .catch(err => {console.log(err)});
}


</script>