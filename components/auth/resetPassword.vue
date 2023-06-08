<template>
  <div class="h-screen">
    <div v-if="tokenParams === undefined">
      <div class="">
        <p class="text-center text-3xl py-2 my-8">Olvide mi contraseña</p>
      </div>
      <div v-if="!sendLink" class="rounded-lg bg-secondary py-6 px-4 m-4">
        <p class="text-center py-2 mx-2">
          Pon la dirección de email que usaste para registrarte. Te enviaremos
          un mensaje con tu nombre de usuario y un enlace para restablecer tu
          contraseña.
        </p>
        <div>
          <v-form ref="form" v-model="valid">
            <div class="mx-4 py-2 text-center">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Correo"
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
                @click="validFormEmail()"
              >
                Enviar
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
      <div v-if="sendLink" class="rounded-lg bg-secondary py-6 px-4 m-4">
        <p class="text-center py-2 mx-2">
          Te hemos enviado un mensaje. Solo tienes que seguir las instrucciones
          para restablecer tu contraseña.
        </p>
      </div>
    </div>
    <div v-else>
      <div class="">
        <p class="text-center text-3xl py-2 my-8">Restablecer mi contraseña</p>
      </div>
      <div
        v-if="!sendNewPassword"
        class="rounded-lg bg-secondary py-6 px-4 m-4"
      >
        <p class="text-center py-2 mx-2">Ingresa una nueva contraseña.</p>
        <div>
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="mx-4 py-2 text-center">
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
            <div class="mx-8 my-2">
              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4"
                block
                fill
                rounded
                @click="validFormPass()"
              >
                Enviar
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
      <div v-if="sendNewPassword" class="rounded-lg bg-secondary py-6 px-4 m-4">
        <div class="mx-8 my-2">
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            block
            fill
            rounded
            @click="this.$router.push('/login')"
          >
            Iniciar sesión
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reset-password-form",
  data() {
    return {
      tokenParams: "",
      sendLink: false,
      sendNewPassword: false,
      valid: true,
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
  mounted() {
    this.tokenParams = this.$route.query.token;
  },
  methods: {
    async validFormEmail() {
      const valid = await this.$refs.form.validate();
      if (valid) return this.requestResetPasssword();
    },
    async validFormPass() {
      const valid = await this.$refs.form.validate();
      if (valid) return this.resetPasssword();
    },
    async requestResetPasssword() {
      try {
        const body = {
          email: this.email,
        };
        const { data } = await this.$axios.post(
          "/auth/reset-password/request",
          body
        );
        this.sendLink = true;
        this.showSuccessAlert(data.msg, 5000);
      } catch (error) {
        this.returnErrorAlert(error);
      } finally {
        this.resetForm();
      }
    },

    async resetPasssword() {
      try {
        const body = {
          token: this.tokenParams,
          password: this.password,
        };
        const { data } = await this.$axios.post("/auth/reset-password/", body);
        this.sendNewPassword = true;
        this.showSuccessAlert(data.msg, 5000);
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
