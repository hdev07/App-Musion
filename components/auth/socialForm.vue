<template>
  <div class="flex justify-around m-4 px-12">
    <v-btn @click="googleLogin()" elevation="2" fab icon outlined color="red">
      <v-icon>mdi-google</v-icon>
    </v-btn>
    <v-btn @click="fbLogin()" elevation="2" fab icon outlined color="blue">
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn @click="appleLogin()" elevation="2" fab icon outlined color="dark">
      <v-icon>mdi-apple</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    googleLogin() {
      this.showErrorAlert("Pronto estará la integración con Google");
    },
    fbLogin() {
      this.showErrorAlert("Pronto estará la integración con Facebook");
    },
    appleLogin() {
      this.showErrorAlert("Pronto estará la integración con Apple");
    },
  },
};
</script>

<style></style>
