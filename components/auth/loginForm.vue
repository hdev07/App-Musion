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
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              block
              fill
              rounded
              @click="validForm()"
            >
              Sign In
            </v-btn>
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
        (v) => !!v || "Correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "Correo no valido",
      ],
      password: "",
      passwordRules: [(v) => !!v || "Contraseña es requerida"],
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

        // Dispatch the login action in Vuex store
        await this.$store.dispatch("auth/login", body);

        // Redirect to home page after successful login
        this.$router.push("/home");
      } catch (error) {
        this.returnErrorAlert(error);
      } finally {
        this.resetForm();
      }
    },

    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
