<template>
  <div>
    <!-- <Search /> -->
    <MuseumsMap :markers="markers" />
    <h1 class="text-center underline">Hola estas en el Mapa</h1>
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import Search from "@/components/common/search.vue";
import MuseumsMap from "@/components/map/museums/museumsMap.vue";
export default {
  name: "Map",
  layout: "empty",
  components: { Navbar, Search, MuseumsMap },
  data() {
    return {
      activeTab: "map",
      museums: [],
      markers: [],
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get("/museums/all");
      this.museums = data.museums;
      this.getMarkers(data.museums);
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    updateActiveTab(tab) {
      this.activeTab = tab;
    },
    getMarkers(museums) {
      try {
        const museumsFilter = museums;
        museumsFilter.forEach((museum) => {
          const marker = {
            museumId: museum.id,
            museum: { ...museum },
            position: {
              lat: Number(museum?.coordinates?.lat),
              lng: Number(museum?.coordinates?.lng),
            },
          };
          this.markers.push(marker);
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style></style>
