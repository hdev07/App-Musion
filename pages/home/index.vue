<template>
  <div>
    <Search :showTune="true" />
    <h1 class="text-center underline">Hola estas en el Home</h1>
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import Search from "@/components/common/search.vue";
export default {
  name: "Home",
  layout: "empty",
  components: { Navbar, Search },
  data() {
    return {
      activeTab: "home",
    };
  },
  methods: {
    updateActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style></style>
