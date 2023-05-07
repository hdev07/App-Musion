<template>
  <div class="h-screen">
    <div class="">
      <p class="text-center text-3xl py-2 my-8">Login</p>
    </div>
    <div class="fixed bottom-0 w-full min-h-[60%] rounded-t-[30px] bg-gray-100">
      <div>
        <switchForm :from="from" />
        <div class="mx-4 py-2 text-center">
          <v-text-field v-model="email" label="Email" outlined />
          <v-text-field v-model="password" label="Password" outlined />
        </div>
        <div class="mx-8 my-2">
          <v-btn color="primary" block fill rounded @click="login()">
            Sign In
          </v-btn>
        </div>
        <div class="flex justify-center">
          <p class="text-sm">Forgotton your pasword?</p>
          <a class="text-sm underline pl-1">Reset password</a>
        </div>
        <v-divider class="mx-2"> Or Sign Up with </v-divider>
        <SocialForm class="mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
import switchForm from "@/components/auth/switchForm";
import SocialForm from "@/components/auth/socialForm";

export default {
  name: "login-form",
  components: {
    switchForm,
    SocialForm,
  },
  data() {
    return {
      from: "login",
      email: "",
      password: "",
      token: "",
      expiresIn: "",
    };
  },
  methods: {
    async login() {
      try {
        const body = {
          email: this.email,
          password: this.password,
        };

        const res = await this.$axios.post("/auth/login", body);
        if (res.status === 200) {
          this.token = res.data?.token;
          this.expiresIn = res.data?.expires;
          this.refreshToken();
        }
      } catch (error) {
        console.error(error);
        this.showErrorAlert("Error del servidor");
      }
    },
    async refreshToken() {
      try {
        const res = await this.$axios.get("/auth/refresh");
        if (res.status === 200) {
          this.showSuccessAlert("Usuario logueado con exito");
          this.token = res.data?.token;
          this.expiresIn = res.data?.expires;
          this.$router.push("/home");
        }
      } catch (error) {
        console.error(error);
        this.showErrorAlert("Error del servidor");
      }
    },
  },
};
</script>

<style></style>
