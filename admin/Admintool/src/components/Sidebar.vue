<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <h1>Admintool</h1>
    <nav>
      <RouterLink to="/">Server Information</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/paymets">Payments</RouterLink>
      <RouterLink to="/content">Users Content</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
  h1 {
    margin-bottom: 16px;
  }
  nav {
    display: flex;
    flex-direction: column;
  }
  a {
    padding: 8px 0;
  }
</style>