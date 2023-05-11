<template>
  <div />
</template>

<script>
import MarkerClusterer from "@google/markerclusterer";
import logoMarker from "../../assets/icons/marker.png";

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
          icon: logoMarker,
        });

        markerMap.addListener("click", () => this.$emit("click", markerMap));

        return markerMap;
      });

      this.cluster = new MarkerClusterer(this.map, this.mrks, {
        gridSize: 20,
        maxZoom: 24,
        imagePath:
          "https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m",
      });

      this.$emit("mapMarkers", this.mrks);
    },
  },
};
</script>
