<template>
  <div>
    <Search />
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import Search from "@/components/common/search.vue";
export default {
  name: "Favorites",
  layout: "empty",
  components: { Navbar, Search },
  data() {
    return {
      activeTab: "fav",
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
