<template>
  <div id="login-page">
    <div class="h-screen w-full bg-img no-gutter justify-center">
      <div class="w-full">
        <img
          src="@/public/images/logos/logo-white.svg"
          alt=""
          class="p-4 size-image flex"
        />
      </div>
      <div class="mx-auto sm:w-1/2 md:w-1/2 lg:w-2/4 xl:w-1/4 padding-top">
        <v-card class="mx-auto h-auto sm:w-2/3">
          <div class="sm:w-full md:w-full lg:w-full self-center">
            <Register />
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import Register from "~/components/auth/registerForm";

export default {
  auth: false,
  layout: "empty",
  components: { Register },
};
</script>
<style scoped>
.size-image {
  max-width: 14rem !important;
}
.padding-top {
  padding-top: 10%;
}
</style>
