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
              :loading="loading"
              type="email"
              label="Correo"
              required
              outlined
            />
            <v-text-field
              v-model="password"
              :append-icon="
                showPass ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
              "
              :type="showPass ? 'text' : 'password'"
              :rules="passwordRules"
              :loading="loading"
              label="Contraseña"
              outlined
              @click:append="showPass = !showPass"
            />
          </div>
          <div class="mx-8 my-2">
            <v-btn
              :disabled="!valid || loading"
              :loading="loading"
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
            <a
              href="https://app.musion.day/reset-password"
              class="text-sm underline pl-1"
              >Reset password</a
            >
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
      loading: false,
      showPass: false,
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
        this.loading = true;
        const body = {
          email: this.email,
          password: this.password,
        };
        await this.$store.dispatch("auth/login", body);
      } catch (error) {
        console.error(error);
      } finally {
        this.resetForm();
        this.loading = false;
      }
    },

    resetForm() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style></style>
