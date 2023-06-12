<template>
  <div>
    <HomeComponent />
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import HomeComponent from "@/components/home/homeComponent.vue";
export default {
  name: "Home",
  layout: "empty",
  components: { Navbar, HomeComponent },
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
