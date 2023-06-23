 <template>
  <div>
    <h1>Account Info</h1>
    <p>Email: {{ $route.params.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',

  fetch() {
    // Access the email parameter
    const email = this.$route.params.email;
    console.log('Email:', email);

    // Fetch data or perform other actions using the email parameter
  }
};
</script>
