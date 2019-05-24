<template>
  <nav class="nav nav-masthead justify-content-center">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/services" class="nav-link">Services</router-link>
    <router-link to="/contact" class="nav-link">Contact</router-link>
    <router-link to="/about" class="nav-link">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>
