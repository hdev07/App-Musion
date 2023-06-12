<template>
  <div>
    <Search @search="handleSearch" />
    <div class="flex mx-3 mb-3 gap-2 overflow-x-auto">
      <div
        v-for="(chip, i) in categories"
        :data="chip"
        :key="i"
        @click="selectCategory(chip.category)"
      >
        <v-chip
          :class="{ primary: selectedCategories.includes(chip.category) }"
        >
          {{
            categories[i]?.category ? categories[i]?.category : "Sin categoría"
          }}
        </v-chip>
      </div>
    </div>
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
  name: "List",
  layout: "empty",
  components: { Navbar, Search, Card, Pagination },
  data() {
    return {
      activeTab: "list",
      museums: [],
      categories: [],
      perPage: 1,
      currentPage: 1,
      lastPage: 1,
      selectedCategories: [],
    };
  },

  async fetch() {
    try {
      const queryParams = this.paramsToString(this.$route.query);
      const { data } = await this.$axios.get(`/museums?${queryParams}`);
      const { perPage, currentPage, lastPage } = data;
      this.museums = data.museums;
      this.perPage = perPage;
      this.currentPage = currentPage;
      this.lastPage = lastPage;
    } catch (error) {
      console.error(error);
      this.returnErrorAlert(error);
    }
  },

  mounted() {
    this.getCategories();
  },

  watch: {
    "$route.query": "$fetch",
  },

  methods: {
    updateActiveTab(tab) {
      this.activeTab = tab;
    },

    async getCategories() {
      const { data } = await this.$axios.get("/museums/categories");
      this.categories = data.categories;
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

    async selectCategory(category) {
      const index = this.selectedCategories.indexOf(category);

      if (index > -1) {
        this.selectedCategories.splice(index, 1);
      } else {
        this.selectedCategories.push(category);
      }

      let query = {
        ...this.$route.query,
        categories: this.selectedCategories.filter((cat) => cat !== ""),
      };

      if (this.selectedCategories.includes("")) {
        query.categories = query.categories.filter((cat) => cat !== "");
        query.categories.push("Sin categoría");
      }

      if (query.categories.length === 0) {
        delete query.categories;
      }

      this.$router.push({ query });
      console.log(this.selectedCategories);
    },
  },
};
</script>

<style></style>
