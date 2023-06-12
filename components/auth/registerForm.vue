<template>
  <div class="h-screen bg-background">
    <div class="">
      <p class="text-center text-3xl py-2 my-8">Register</p>
    </div>
    <div
      class="fixed bottom-0 w-full min-h-[60%] rounded-t-[30px] bg-secondary"
    >
      <div>
        <v-form ref="form" v-model="valid" lazy-validation>
          <SwitchForm :from="from" />
          <div class="mx-4 py-2 text-center">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              type="text"
              label="Nombre"
              outlined
              required
            />
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
            <v-text-field
              v-model="rePassword"
              :rules="rePasswordRules"
              type="password"
              label="Confirma contraseña"
              outlined
            />
          </div>
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
          <v-divider class="mx-2"> Or Sign Up with </v-divider>
          <SocialForm />
        </v-form>
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
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Nombre es requerido"],
      email: "",
      emailRules: [
        (v) => !!v || "Correo es requerido",
        (v) => /.+@.+\..+/.test(v) || "Correo no valido",
      ],
      password: "",
      passwordRules: [
        (v) => !!v || "Contraseña es requerida",
        (v) =>
          /^.{8,}$/.test(v) || "La contraseña debe tener al menos 8 caracteres",
      ],
      rePassword: "",
      rePasswordRules: [
        (v) => !!v || "Las contraseñas no coinciden",
        (v) => v === this.password || "Las contraseñas no coinciden",
      ],
    };
  },

  methods: {
    async validForm() {
      const valid = await this.$refs.form.validate();
      if (valid) return this.register();
    },

    async register() {
      try {
        const body = {
          name: this.name,
          email: this.email,
          password: this.password,
          repassword: this.rePassword,
        };
        await this.$store.dispatch("auth/register", body);
      } catch (error) {
        console.error(error);
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
