<template>
  <div class="h-screen bg-background">
    <div>
      <walkthrough_1
        v-if="img === 1"
        :currentColor="'#212121'"
        :currentColorPrimary="'#FF4081'"
        class="m-auto w-full py-12 px-4 md:w-2/3 lg:w-1/3"
      />
      <walkthrough_2
        v-if="img === 2"
        :currentColor="'#212121'"
        :currentColorPrimary="'#FF4081'"
        class="m-auto w-full py-12 px-4 md:w-2/3 lg:w-1/3"
      />
      <walkthrough_3
        v-if="img === 3"
        :currentColor="'#212121'"
        :currentColorPrimary="'#FF4081'"
        class="m-auto w-full py-12 px-4 md:w-2/3 lg:w-1/3"
      />
    </div>
    <div
      class="fixed bottom-0 w-full h-72 rounded-t-[30px] shadow-md bg-secondary"
    >
      <div>
        <div class="mt-8">
          <p class="text-center text-xl py-2 mb-1">{{ title }}</p>
          <p class="text-center text-md py-1 my-0 mx-8">{{ desc }}</p>
        </div>
        <div class="my-2 flex justify-evenly mx-40">
          <div
            :class="{ activeStep: step === 1 }"
            class="rounded-full w-2 h-2 my-2 bg-white"
          />
          <div
            :class="{ activeStep: step === 2 }"
            class="rounded-full w-2 h-2 my-2 bg-white"
          />
          <div
            :class="{ activeStep: step === 3 }"
            class="rounded-full w-2 h-2 my-2 bg-white"
          />
        </div>
        <div
          v-if="step === 1 || step === 2"
          class="flex justify-between m-8 items-center"
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
import walkthrough_1 from "./walkthrough_1.vue";
import walkthrough_2 from "./walkthrough_2.vue";
import walkthrough_3 from "./walkthrough_3.vue";
export default {
  components: { walkthrough_1, walkthrough_2, walkthrough_3 },
  name: "card-walkthrough",
  data() {
    return {};
  },
  props: {
    img: { type: Number, Required: true },
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

<style>
.activeStep {
  background: #ff4081;
  color: #ff4081;
}
</style>
