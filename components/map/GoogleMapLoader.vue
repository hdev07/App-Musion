<template>
  <div>
    <div ref="googleMap" class="h-screen w-full" />
    <template v-if="Boolean(google) && Boolean(map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: { type: Object, required: true },
    apiKey: { type: String, default: "" },
    center: { type: Object, default: () => ({}) },
  },

  data() {
    return {
      google: null,
      map: null,
    };
  },

  watch: {
    center(newVal, oldVal) {
      if (this.map != null) this.map.setCenter(newVal);
    },
  },

  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey,
    });
    this.google = googleMapApi;
    this.initializeMap();
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    },
  },
};
</script>

<style lang="scss" scoped></style>
