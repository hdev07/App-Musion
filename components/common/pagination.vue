<template>
  <div class="flex justify-around">
    <div class="absolute justify-center bottom-24 w-80">
      <v-pagination v-model="page" class="my-3" :length="15"></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style></style>
