import Vue from "vue";

Vue.mixin({
  methods: {
    showSuccessAlert(message) {
      this.$v.Alert({
        title: "Success",
        text: message,
        color: "success",
      });
    },

    showErrorAlert(message) {
      this.$v.Alert({
        title: "Error",
        text: message,
        color: "danger",
      });
    },

    showWarningAlert(message) {
      this.$v.Alert({
        title: "Hold on!",
        text: message,
        color: "warning",
      });
    },

    toggleLoading(container, status, type = "default") {
      try {
        if (container) {
          if (status)
            return this.$vs.loading({
              type,
              container: `#${container}`,
              text: "Cargando...",
            });
          return this.$vs.loading.close(`#${container} > .con-vs-loading`);
        }
        if (status) return this.$vs.loading();
        return this.$vs.loading.close();
      } catch (error) {
        console.error(error);
      }
    },
  },
});
