<template>
  <div class="flex justify-around">
    <div class="absolute justify-center bottom-24 w-80">
      <v-pagination v-model="currentTx" :length="totalPages" class="my-3" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTx: 1,
    };
  },
  props: {
    perPage: { type: Number, default: 25 },
    totalPages: { type: Number, default: 1 },
    currentPage: { type: Number, default: 1 },
  },
  watch: {
    currentTx(newVal, oldVal) {
      this.$emit("changePage", newVal);
    },
  },
};
</script>

<style></style>
