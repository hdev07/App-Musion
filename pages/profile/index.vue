<template>
  <div>
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
export default {
  name: "Profile",
  layout: "empty",
  components: { Navbar },
  data() {
    return {
      activeTab: "profile",
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
