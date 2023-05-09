<template>
  <div class="h-screen bg-background">
    <div class="">
      <p class="text-center text-3xl py-2 my-8">Login</p>
    </div>
    <div
      class="fixed bottom-0 w-full min-h-[60%] rounded-t-[30px] bg-secondary"
    >
      <div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <switchForm :from="from" />
          <div class="mx-4 py-2 text-center">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="Correo"
              required
              outlined
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Contraseña"
              outlined
            />
          </div>
          <div class="mx-8 my-2">
            <div class="mx-8 my-4">
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                block
                fill
                rounded
                @click="validForm()"
              >
                Sign Up
              </v-btn>
            </div>
          </div>
          <div class="flex justify-center">
            <p class="text-sm">Forgotton your pasword?</p>
            <a href="#" class="text-sm underline pl-1">Reset password</a>
          </div>
          <v-divider class="mx-2"> Or Sign Up with </v-divider>
          <SocialForm class="mt-8" />
        </v-form>
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
      valid: true,
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is Requerido",
        (v) => /.+@.+\..+/.test(v) || "E-mail no valido",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Contraseña es requerida"],
      token: "",
      expiresIn: "",
    };
  },
  methods: {
    async validForm() {
      const valid = await this.$refs.form.validate();
      if (valid) return this.login();
    },

    async login() {
      try {
        const body = {
          email: this.email,
          password: this.password,
        };

        const res = await this.$axios.post("/auth/login", body);
        if (res.status === 200) {
          this.showSuccessAlert("Usuario logueado con exito", 2000);
          this.token = res.data?.token;
          this.expiresIn = res.data?.expires;
          this.refreshToken();
        }
      } catch (error) {
        this.returnErrorAlert(error);
      } finally {
        this.resetForm();
      }
    },

    async refreshToken() {
      try {
        const res = await this.$axios.get("/auth/refresh");
        if (res.status === 200) {
          this.token = res.data?.token;
          this.expiresIn = res.data?.expires;
          this.$router.push("/home");
        }
      } catch (error) {
        this.showErrorAlert("Error del servidor");
      }
    },

    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
