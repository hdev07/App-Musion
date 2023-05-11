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
    options: {
      type: Object,
      required: true,
    },
    position: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    opened: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      infoWindow: null,
    };
  },

  watch: {
    opened(newVal, oldVal) {
      if (Boolean(newVal)) {
        this.infoWindow.setContent(this.options.marker.marker.infoText);
        this.infoWindow.open(this.map, this.options.marker);
      } else this.infoWindow.close();
    },

    position(newVal, oldVal) {
      this.infoWindow.close();
      this.infoWindow.setContent(this.options.marker.marker.infoText);
      this.infoWindow.open(this.map, this.options.marker);
    },
  },

  mounted() {
    this.infoWindow = new google.maps.InfoWindow({
      content: this.options.content,
      // maxWidth: 300
    });

    this.infoWindow.addListener("closeclick", () => this.$emit("close"));
  },
};
</script>
