<template>
  <div class="bg-gray-100 dark:bg-[#1A1A1A] h-screen">
    <div>
      <img
        :src="img"
        alt="walkthrough"
        class="m-auto w-full py-12 px-4 md:w-2/3 lg:w-1/3"
      />
    </div>
    <div
      class="fixed bottom-0 w-full h-72 rounded-t-[30px] shadow-md bg-gray-200 dark:bg-[#212120] dark:text-gray-100"
    >
      <div>
        <div class="mt-8">
          <p class="text-center text-xl py-2">{{ title }}</p>
          <p class="text-center text-md py-1 mx-8">{{ desc }}</p>
        </div>
        <div class="my-4 text-center">
          {{ step }}
        </div>
        <div
          v-if="step === 1 || step === 2"
          class="flex justify-between m-8 py-4 items-center"
        >
          <router-link to="/login" class="text-xs underline">Skip</router-link>
          <div class="w-1/3 justify-end">
            <v-btn color="primary" block outlined rounded @click="nextStep()">
              Next
            </v-btn>
          </div>
        </div>
        <div v-else class="flex justify-between m-8 py-4 items-center">
          <v-btn color="primary" block fill rounded @click="createAcount()">
            create acount
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-walkthrough",
  data() {
    return {};
  },
  props: {
    img: { type: String, Required: true },
    title: { type: String, Required: true },
    desc: { type: String, Required: true },
    step: { type: Number, Required: true },
  },
  methods: {
    nextStep() {
      this.$emit("next", true);
    },
    previousStep() {
      this.$emit("previous", true);
    },
    createAcount() {
      this.$router.push("/register");
    },
  },
};
</script>

<style></style>
