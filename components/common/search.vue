<template>
  <v-container>
    <v-text-field
      v-model="searchText"
      prepend-inner-icon="mdi-magnify"
      :append-icon="showTune ? 'mdi-tune-vertical' : ''"
      placeholder="Search"
      type="text"
      outlined
      filled
      clearable
      hide-details
      @click:append="iconClick()"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
      searchClearTimeout: undefined,
    };
  },
  props: {
    showTune: { type: Boolean, default: false },
  },
  watch: {
    searchText(newVal, oldVal) {
      if (this.searchClearTimeout) clearTimeout(this.searchClearTimeout);
      this.searchClearTimeout = setTimeout(() => {
        this.$emit("search", newVal);
      }, 500);
    },
  },
  methods: {
    iconClick() {
      this.showWarningAlert("Diste click en filtros");
      console.log("hola me dio click");
    },
  },
};
</script>

<style></style>
