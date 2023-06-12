<template>
  <div>
    <ProfileComponent :user="user" />
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import ProfileComponent from "@/components/profile/profileComponent.vue";
export default {
  name: "Profile",
  layout: "empty",
  components: { Navbar, ProfileComponent },
  data() {
    return {
      activeTab: "profile",
      user: {},
    };
  },
  async fetch() {
    try {
      const { data } = await this.$axios.get("/users");
      this.user = data;
    } catch (e) {
      console.error(e);
      this.returnErrorAlert(e);
    }
  },
  methods: {
    updateActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style></style>
