<template>
  <div />
</template>

<script>
import MarkerClusterer from "@google/markerclusterer";

export default {
  props: {
    google: {
      type: Object,
      required: true,
    },
    map: {
      type: Object,
      required: true,
    },
    markers: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      cluster: null,
      mrks: [],
    };
  },
  watch: {
    markers(newVal, oldVal) {
      this.setMarkers();
    },
  },
  mounted() {
    this.setMarkers();
  },
  methods: {
    setMarkers() {
      if (this.cluster != null) {
        this.cluster.removeMarkers(this.mrks);
      }

      this.mrks = this.markers.map((marker) => {
        const markerMap = new this.google.maps.Marker({
          position: marker.position,
          marker: marker,
          map: this.map,
          icon: "https://s3.amazonaws.com/musion.day/marker.png",
        });

        markerMap.addListener("click", () => this.$emit("click", markerMap));

        return markerMap;
      });

      this.cluster = new MarkerClusterer(this.map, this.mrks, {
        gridSize: 20,
        maxZoom: 24,
        imagePath: "https://s3.amazonaws.com/musion.day/clusters/m",
      });

      this.$emit("mapMarkers", this.mrks);
    },
  },
};
</script>
