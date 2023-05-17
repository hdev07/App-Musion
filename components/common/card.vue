<template>
  <div class="flex mx-3 bg-secondary rounded-md h-30% mb-2">
    <div class="w-1/4 m-3 flex">
      <img
        class="rounded-md"
        src="../../assets/images/logo.svg"
        alt="museumImage"
      />
    </div>
    <div class="w-3/4 my-3 mr-3">
      <div class="flex justify-between content-center mb-1">
        <p class="mb-0 text-md">{{ title }}</p>
        <div @click.stop="handleFavorite(id)" class="colorFav">
          <feather-icon icon="HeartIcon" svg-classes="h-6" />
        </div>
      </div>
      <div>
        <p class="text-xs mb-1">
          {{ description }}
        </p>
      </div>
      <div class="flex mb-1 colorFav">
        <feather-icon icon="StarIcon" svg-classes="h-5 fill-primary" />
        <feather-icon icon="StarIcon" svg-classes="h-5 fill-primary" />
        <feather-icon icon="StarIcon" svg-classes="h-5 fill-primary" />
        <feather-icon icon="StarIcon" svg-classes="h-5 fill-primary" />
        <feather-icon icon="StarIcon" svg-classes="h-5" />
      </div>
      <div>
        <p class="text-xs mb-1">
          {{ location }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, default: 0 },
    title: { type: String, default: "Museum Title" },
    description: { type: String, default: "Museum Descripcion" },
    location: { type: String, default: "Museum Location" },
  },
  methods: {
    async handleFavorite(id) {
      try {
        const res = await this.$axios.delete(`/favorites/${id}`);
        if (res.status === 200)
          this.showSuccessAlert("Museo eliminado de favoritos");
        this.$emit("update-data", true);
      } catch (error) {
        console.log(error);
        this.returnErrorAlert(error);
      } finally {
        this.$emit("update-data", true);
      }
    },
  },
};
</script>

<style>
.colorFav {
  color: #ff4081;
}
</style>
