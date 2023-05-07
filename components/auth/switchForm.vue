<template>
  <div class="m-4 my-4 py-2 flex justify-around">
    <div class="w-1/3">
      <v-btn
        rounded
        block
        color="primary"
        :outlined="from === 'login'"
        :fill="from === 'login'"
        @click="goToLogin()"
      >
        login
      </v-btn>
    </div>
    <div class="w-1/3">
      <v-btn
        block
        rounded
        color="primary"
        :outlined="from === 'register'"
        :fill="from === 'register'"
        @click="goToRegister()"
      >
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
  props: {
    from: { type: String, require: true },
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
