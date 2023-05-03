<template>
  <div class="bg-gray-100 dark:bg-[#1A1A1A] h-screen">
    <div class="">
      <p class="text-center text-3xl py-2 my-8">Register</p>
    </div>
    <div
      class="fixed bottom-0 w-full min-h-[60%] rounded-t-[30px] bg-gray-200 dark:bg-[#212120] dark:text-gray-100"
    >
      <div>
        <SwitchForm />
        <div class="mx-4 py-2 text-center">
          <v-text-field label="Email" outlined />
          <v-text-field label="Password" outlined />
          <v-text-field label="Confirm Password" outlined />
        </div>
        <div class="mx-8 my-2">
          <v-btn color="primary" block outlined rounded @click="nextStep()">
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
    return {};
  },
};
</script>

<style></style>
