<template>
  <div>
    <CardWalkthrough
      v-if="step === 1"
      :img="img1"
      :title="title1"
      :desc="desc1"
      :step="1"
      @next="nextStep()"
    />
    <CardWalkthrough
      v-if="step === 2"
      :img="img2"
      :title="title2"
      :desc="desc2"
      :step="2"
      @next="nextStep()"
      @previos="previousStep()"
    />
    <CardWalkthrough
      v-if="step === 3"
      :img="img3"
      :title="title3"
      :desc="desc3"
      :step="3"
      @previos="previousStep()"
    />
  </div>
</template>

<script>
import CardWalkthrough from "../../components/walkthrough/cardWalkthrough.vue";
export default {
  components: { CardWalkthrough },
  layout: "empty",
  data() {
    return {
      img1: "https://s3.amazonaws.com/musion.day/walkthrough_1.png",
      img2: "https://s3.amazonaws.com/musion.day/walkthrough_2.png",
      img3: "https://s3.amazonaws.com/musion.day/walkthrough_3.png",
      title1: "Select the museums.",
      title2: "We will take care of the rest.",
      title3: "You relax and enjoy your visits.",
      desc1: "Make sure to select the museums you want to visit.",
      desc2:
        "Thanks to the implementation of technology, we draw the best route to visit them all!",
      desc3:
        "Have fun and learn all about the museum, as the next one is waiting.",
      step: 1,
    };
  },
  methods: {
    nextStep() {
      this.step = this.step + 1;
    },
  },
};
</script>

<style></style>
