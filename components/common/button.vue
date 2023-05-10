<template>
  <div
    class="bg-secondary rounded-md flex w-8 h-8 justify-center content-center"
    @click="clickInButton()"
  >
    <feather-icon
      class="justify-center"
      stroke-width="4"
      icon="HeartIcon"
      svg-classes="h-5"
    />
  </div>
</template>

<script>
export default {
  methods: {
    clickInButton() {
      console.log("click");
    },
  },
};
</script>

<style></style>
