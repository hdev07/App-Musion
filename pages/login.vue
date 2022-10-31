<template>
  <div id="login-page" class="bg-img h-screen w-full">
    <Login :redirect="redirect" />
  </div>
</template>

<script>
import Login from "~/components/auth/loginForm";
export default {
  auth: false,
  layout: "empty",
  components: { Login },
  data: () => ({
    redirect: undefined,
  }),
  methods: {},
};
</script>

<style scoped>
.size-image {
  max-width: 14rem !important;
}
.padding-top {
  padding-top: 20%;
}
</style>
