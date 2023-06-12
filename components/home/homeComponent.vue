<template>
  <div class="container">
    <div class="flex justify-between items-center my-3">
      <p class="text-xl mb-0 font-bold">¡{{ greeting }}!</p>
      <div>
        <div class="flex">
          <feather-icon
            class="mx-3"
            stroke-width="6"
            icon="BellIcon"
            svg-classes="h-6"
          />
          <feather-icon
            stroke-width="6"
            icon="SettingsIcon"
            svg-classes="h-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    greeting() {
      const currentHour = new Date().getHours();

      if (currentHour >= 6 && currentHour < 12) {
        return "Buenos días";
      } else if (currentHour >= 12 && currentHour < 20) {
        return "Buenas tardes";
      } else {
        return "Buenas noches";
      }
    },
  },
  methods: {},
};
</script>

<style></style>
