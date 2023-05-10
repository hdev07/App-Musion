<template>
  <div>
    <Search />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <div class="relative h-44" />
    <Pagination />
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import Search from "@/components/common/search.vue";
import Card from "@/components/common/card.vue";
import Pagination from "@/components/common/pagination.vue";

export default {
  name: "List",
  layout: "empty",
  components: { Navbar, Search, Card, Pagination },
  data() {
    return {
      activeTab: "list",
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
