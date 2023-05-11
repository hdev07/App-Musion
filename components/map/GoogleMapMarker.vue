<template>
  <div />
</template>

<script>
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
    marker: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      mapMarker: null,
    };
  },

  mounted() {
    this.mapMarker = new this.google.maps.Marker({
      position: this.marker.position,
      marker: this.marker,
      map: this.map,
      icon: "https://s3.amazonaws.com/musion.day/marker.png",
    });

    this.mapMarker.addListener("click", () =>
      this.$emit("click", this.mapMarker)
    );
  },
};
</script>
