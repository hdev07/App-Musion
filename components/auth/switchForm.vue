<template>
  <div class="m-4 my-4 py-2 flex justify-around">
    <div class="w-1/3">
      <v-btn color="primary" block outlined rounded @click="goToLogin()">
        login
      </v-btn>
    </div>
    <div class="w-1/3">
      <v-btn color="primary" block fill rounded @click="goToRegister()">
        Register
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "switch-form",
  data() {
    return {};
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style></style>
