<template>
  <div>
    <h1 class="text-center underline">Hola estas en Favoritos</h1>
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
export default {
  name: "Favorites",
  layout: "empty",
  components: { Navbar },
  data() {
    return {
      activeTab: "fav", // Valor inicial de activeTab en el componente padre
    };
  },
  methods: {
    updateActiveTab(tab) {
      this.activeTab = tab; // Actualizar el valor de activeTab en el componente padre
    },
  },
};
</script>

<style></style>
