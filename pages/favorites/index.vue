<template>
  <div>
    <Search @search="handleSearch" />
    <div v-for="(card, i) in museums" :data="card" :key="i">
      <Card
        :id="museums[i]?._id"
        :title="museums[i]?.name"
        :description="museums[i]?.description"
        :location="returLocationString(museums[i].address)"
        @update-data="retrieveData"
      />
    </div>
    <div class="relative h-44" />
    <Pagination
      v-if="lastPage !== 0"
      :perPage="perPage"
      :totalPages="lastPage"
      :currentPage="currentPage"
      @changePage="handleChangePage"
    />
    <Navbar :activeTab="activeTab" @update:activeTab="updateActiveTab" />
  </div>
</template>

<script>
import Navbar from "@/components/common/navbar.vue";
import Search from "@/components/common/search.vue";
import Card from "@/components/common/card.vue";
import Pagination from "@/components/common/pagination.vue";
export default {
  name: "Favorites",
  layout: "empty",
  components: { Navbar, Search, Card, Pagination },
  data() {
    return {
      activeTab: "fav",
      museums: [],
      perPage: 1,
      currentPage: 1,
      lastPage: 1,
    };
  },

  async fetch() {
    try {
      const queryParams = this.paramsToString(this.$route.query);
      const { data } = await this.$axios.get(`/favorites?${queryParams}`);
      const { perPage, currentPage, lastPage } = data;
      this.museums = data.favorites;
      this.perPage = perPage;
      this.currentPage = currentPage;
      this.lastPage = lastPage;
    } catch (e) {
      console.error(e);
      this.returnErrorAlert(e);
    }
  },

  watch: {
    "$route.query": "$fetch",
  },

  methods: {
    updateActiveTab(tab) {
      this.activeTab = tab;
    },

    handleSearch(search) {
      const query = this.$route.query;
      this.$router.push({ query: { ...query, page: 1, search } });
    },

    handleChangePage(page) {
      const query = this.$route.query;
      this.$router.push({ query: { ...query, page } });
    },

    retrieveData() {
      this.$fetch();
    },

    returLocationString(address) {
      let addrss =
        address?.streetAddress +
        " " +
        address?.addressLocality +
        " " +
        address?.postalCode +
        " " +
        address?.addressCountry +
        " " +
        address?.city;
      return addrss;
    },
  },
};
</script>

<style></style>
