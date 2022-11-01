<template>
  <div id="register-page" class="bg-img h-screen w-full">
    <Register />
  </div>
</template>

<script>
import Register from "~/components/auth/registerForm";
export default {
  auth: false,
  layout: "empty",
  components: { Register },
  data: () => ({}),
  methods: {},
};
</script>

<style scoped></style>
