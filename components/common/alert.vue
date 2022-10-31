<template>
  <div class="text-center">
    <v-snackbar v-model="snackbar" :color="alertType">{{
      textAlert
    }}</v-snackbar>
  </div>
</template>
<script>
export default {
  props: {
    alertType: {
      type: String,
      default: "success",
    },
    textAlert: {
      type: String,
      required: true,
    },
    snackbar: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
