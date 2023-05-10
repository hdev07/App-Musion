import Vue from "vue";

Vue.mixin({
  methods: {
    showSuccessAlert(message, duration = 3000) {
      this.$vs.notification({
        title: "Éxito",
        color: "success",
        text: message,
        flat: true,
        position: "top-right",
        duration: duration,
        progress: "auto",
      });
    },

    showErrorAlert(message, duration = 3000) {
      this.$vs.notification({
        title: "Error",
        color: "danger",
        text: message,
        flat: true,
        position: "top-right",
        duration: duration,
        progress: "auto",
      });
    },

    showWarningAlert(message, duration = 3000) {
      this.$vs.notification({
        title: "Espera",
        color: "warning",
        text: message,
        flat: true,
        position: "top-right",
        duration: duration,
        progress: "auto",
      });
    },
  },
});
