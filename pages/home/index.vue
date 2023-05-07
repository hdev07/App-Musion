<template>
  <div>
    <h1 class="text-center underline">Hola estas en el Home</h1>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
export default {
  name: "Home",
  layout: "empty",
  components: { Navbar },
};
</script>

<style></style>
