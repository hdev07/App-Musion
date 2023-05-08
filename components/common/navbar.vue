<template>
  <div class="fixed bottom-0 w-full">
    <v-bottom-navigation>
      <v-btn value="home">
        Home
        <feather-icon stroke-width="4" icon="HomeIcon" svg-classes="h-4" />
      </v-btn>
      <v-btn value="list">
        List
        <feather-icon stroke-width="4" icon="ListIcon" svg-classes="h-4" />
      </v-btn>
      <v-btn value="map">
        Map
        <feather-icon stroke-width="4" icon="MapPinIcon" svg-classes="h-4" />
      </v-btn>
      <v-btn value="favorites">
        Favorites
        <feather-icon stroke-width="4" icon="HeartIcon" svg-classes="h-4" />
      </v-btn>
      <v-btn value="user">
        user
        <feather-icon stroke-width="4" icon="UserIcon" svg-classes="h-4" />
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
