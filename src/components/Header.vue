<template>
  <header class="masthead mb-auto">
    <div>
      <h3 class="masthead-brand">{{ brand }}</h3>
      <Nav />
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Header",
  props: {
    brand: String
  },
  components: {
    Nav
  }
};
</script>
