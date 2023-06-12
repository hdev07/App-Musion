import Vue from "vue";

Vue.prototype.$displaySuccessAlert = function (message, duration = 3000) {
  this.$vs.notification({
    title: "Éxito",
    color: "success",
    text: message,
    flat: true,
    position: "top-right",
    duration: duration,
    progress: "auto",
  });
};

Vue.prototype.$displayErrorAlert = function (message, duration = 3000) {
  this.$vs.notification({
    title: "Error",
    color: "danger",
    text: message,
    flat: true,
    position: "top-right",
    duration: duration,
    progress: "auto",
  });
};

Vue.prototype.$displayWarningAlert = function (message, duration = 3000) {
  this.$vs.notification({
    title: "Espera",
    color: "warning",
    text: message,
    flat: true,
    position: "top-right",
    duration: duration,
    progress: "auto",
  });
};
