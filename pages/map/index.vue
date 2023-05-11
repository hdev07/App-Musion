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
import Card from "@/components/common/card.vue";

export default {
  name: "Map",
  layout: "empty",
  components: { Navbar, Search, MuseumsMap, Card },
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
            infoText: this.setInfoWindoContentByMuseum(museum),
          };
          this.markers.push(marker);
        });
      } catch (e) {
        console.error(e);
      }
    },
    setInfoWindoContentByMuseum(museum) {
      return `
      <div class="w-full flex flex-wrap p-2">
        <div class="w-full flex border-b border-primary mb-4 pb-1">
          <div class="w-2/3 flex items-center">
            <p class="truncate text-lg font-semibold text-center text-gray-900 mb-1">
              ${museum.name}
            </p>
          </div>
        </div>
        <div class="w-full flex flex-wrap">
          <p class="w-full flex flex-wrap mb-3S text-gray-900">
            ${museum?.description}
          </p>
          <div class="w-full flex flex-wrap mb-1 text-gray-900">
            ${museum?.address?.streetAddress} ${museum?.address?.addressLocality} ${museum?.address?.postalCode} ${museum?.address?.addressCountry} ${museum?.address?.city}
          </div>
          <div class="w-full text-end m-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=${museum.lat},${museum.lng}"
              target="_blank"
              rel="noopener noreferrer"
              class="underline"
            >
              Obtener direcciones
            </a>
          </div>
        </div>
      </div>
      `;
    },
  },
};
</script>
