import Vue from "vue";

Vue.mixin({
  methods: {
    showSuccessAlert(message) {
      this.$vs.notification({
        title: "Success",
        color: "success",
        text: message,
        flat: true,
        position: "top-right",
        duration: 4000,
        progress: "auto",
      });
    },

    showErrorAlert(message) {
      this.$vs.notification({
        title: "Error",
        color: "danger",
        text: message,
        flat: true,
        position: "top-right",
        duration: 4000,
        progress: "auto",
      });
    },

    showWarningAlert(message) {
      this.$vs.notification({
        title: "Hold on!",
        color: "warning",
        text: message,
        flat: true,
        position: "top-right",
        duration: 4000,
        progress: "auto",
      });
    },
  },
});
