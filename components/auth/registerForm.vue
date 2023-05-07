<template>
  <div class="h-screen">
    <div class="">
      <p class="text-center text-3xl py-2 my-8">Register</p>
    </div>
    <div class="fixed bottom-0 w-full min-h-[60%] rounded-t-[30px] bg-gray-100">
      <div>
        <SwitchForm :from="from" />
        <div class="mx-4 py-2 text-center">
          <v-text-field v-model="name" label="Name" outlined />
          <v-text-field v-model="email" label="Email" outlined />
          <v-text-field v-model="password" label="Password" outlined />
          <v-text-field
            v-model="rePassword"
            label="Confirm Password"
            outlined
          />
        </div>
        <div class="mx-8 my-4">
          <v-btn color="primary" block fill rounded @click="register()">
            Sign Up
          </v-btn>
        </div>
        <v-divider class="mx-2"> Or Sign Up with </v-divider>
        <SocialForm />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchForm from "@/components/auth/switchForm";
import SocialForm from "@/components/auth/socialForm.vue";
export default {
  name: "register-form",
  components: {
    SwitchForm,
    SocialForm,
  },
  data() {
    return {
      from: "register",
      name: "",
      email: "",
      password: "",
      rePassword: "",
    };
  },

  methods: {
    async register() {
      try {
        const body = {
          name: this.name,
          email: this.email,
          password: this.password,
          repassword: this.rePassword,
        };
        const res = await this.$axios.post("/auth/register", body);
        console.log(res);
        if (res.status === 201) {
          this.showSuccessAlert("Cuenta creada con exito");
          this.$router.push("/home");
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
          this.token = res.data?.token;
          this.expiresIn = res.data?.expires;
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
