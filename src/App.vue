<template>
  <div
    id="app"
    class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
  >
    <Header brand="andihermantyo" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>
