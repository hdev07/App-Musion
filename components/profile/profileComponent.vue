<template>
  <div>
    <div class="mt-8">
      <img
        src="https://i.pravatar.cc/300"
        alt="img_avatar"
        class="rounded-full flex mx-auto w-1/2"
      />
    </div>
    <div>
      <p class="text-center text-3xl mb-1 mt-6">{{ user?.name }}</p>
      <p class="text-center">{{ user?.email }}</p>
    </div>
    <v-card class="mx-3 rounded-lg mt-6" @click="logout">
      <div class="flex justify-between rounded-lg">
        <div class="flex items-center my-4 px-3">
          <feather-icon
            class="mr-2"
            stroke-width="5"
            icon="LogOutIcon"
            svg-classes="h-5"
          />
          <p class="mb-0">Logout</p>
        </div>
        <feather-icon
          class="mx-3"
          stroke-width="5"
          icon="ChevronRightIcon"
          svg-classes="h-5"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, require: true },
  },
  methods: {
    async logout() {
      try {
        const res = await this.$axios.get("auth/logout");
        if (res?.status === 200) this.$router.push("/login");
        this.$displaySuccessAlert(res?.data?.msg);
      } catch (error) {
        this.returnErrorAlert(error);
      }
    },
  },
};
</script>

<style></style>
