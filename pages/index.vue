<template>
  <div class="bg-[#F48FB1] flex justify-center w-full h-screen">
    <div v-if="device !== 'smartphone'">
      <MsgDevice />
    </div>
    <div
      v-if="device === 'smartphone' && loading === true"
      class="max-w-auto m-auto"
    >
      <img src="@/assets/images/logo.svg" alt="logo" class="to-blink mx-auto" />
    </div>
  </div>
</template>

<script>
import MsgDevice from "@/components/msgDevice.vue";

export default {
  name: "IndexPage",
  components: {
    MsgDevice,
  },
  data() {
    return {
      device: "",
      loading: true,
    };
  },
  mounted() {
    this.device = this.$device.machine.type;
    setTimeout(() => {
      this.loading = false;
      if (this.$device.machine.type === "smartphone")
        this.$router.push("/walkthrough");
    }, 5000);
  },
  methods: {},
};
</script>
<style scoped>
.to-blink {
  animation-name: parpadeo;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name: parpadeo;
  -webkit-animation-duration: 2.5s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
}

@-moz-keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes parpadeo {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
