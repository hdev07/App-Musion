<template>
  <div class="bg-gray-100 dark:bg-[#1A1A1A] h-screen">
    <div class="">
      <p class="text-center text-3xl py-2 my-8">Login</p>
    </div>
    <div
      class="fixed bottom-0 w-full min-h-[60%] rounded-t-[30px] bg-gray-200 dark:bg-[#212120] dark:text-gray-100"
    >
      <div>
        <switchForm />
        <div class="mx-4 py-2 text-center">
          <v-text-field label="Email" outlined />
          <v-text-field label="Password" outlined />
        </div>
        <div class="mx-8 my-2">
          <v-btn color="primary" block outlined rounded @click="nextStep()">
            Sign In
          </v-btn>
        </div>
        <div class="flex justify-center">
          <p class="text-sm">Forgotton your pasword?</p>
          <a class="text-sm underline pl-1">Reset password</a>
        </div>
        <v-divider class="mx-2"> Or Sign Up with </v-divider>
        <SocialForm />
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
};
</script>

<style></style>
