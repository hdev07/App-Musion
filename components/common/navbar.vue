<template>
  <div class="fixed bottom-0 w-full bg-[#1A1A1A] pb-3 mt-3 z-50">
    <div class="flex justify-around items-center">
      <nuxt-link class="no-styles" to="/home">
        <div
          class="home px-2"
          :class="{ active: activeTab === 'home' }"
          @click="changeTab('home')"
        >
          <feather-icon
            class="justify-center mt-3"
            stroke-width="5"
            icon="HomeIcon"
            svg-classes="h-5"
          />
          <p class="mb-0 pt-2">Inicio</p>
        </div>
      </nuxt-link>
      <nuxt-link class="no-styles" to="/list">
        <div
          class="list px-2"
          :class="{ active: activeTab === 'list' }"
          @click="changeTab('list')"
        >
          <feather-icon
            class="justify-center mt-3"
            stroke-width="4"
            icon="ListIcon"
            svg-classes="h-5"
          />
          <p class="mb-0 pt-2">Lista</p>
        </div>
      </nuxt-link>
      <nuxt-link class="no-styles" to="/map">
        <div
          class="map px-2"
          :class="{ active: activeTab === 'map' }"
          @click="changeTab('map')"
        >
          <feather-icon
            class="justify-center mt-3"
            stroke-width="4"
            icon="MapPinIcon"
            svg-classes="h-5"
          />
          <p class="mb-0 pt-2">Mapa</p>
        </div>
      </nuxt-link>
      <nuxt-link class="no-styles" to="/favorites">
        <div
          class="fav px-2"
          :class="{ active: activeTab === 'fav' }"
          @click="changeTab('fav')"
        >
          <feather-icon
            class="justify-center mt-3"
            stroke-width="4"
            icon="HeartIcon"
            svg-classes="h-5"
          />
          <p class="mb-0 pt-2">Favs</p>
        </div>
      </nuxt-link>
      <nuxt-link class="no-styles" to="/profile">
        <div
          class="profile px-2"
          :class="{ active: activeTab === 'profile' }"
          @click="changeTab('profile')"
        >
          <feather-icon
            class="justify-center mt-3"
            stroke-width="4"
            icon="UserIcon"
            svg-classes="h-5"
          />
          <p class="mb-0 pt-2">Perfil</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localActiveTab: "",
    };
  },
  created() {
    this.localActiveTab = this.activeTab; // Hacer una copia local de la prop
  },
  props: {
    activeTab: { type: String, required: true },
  },
  methods: {
    changeTab(tab) {
      this.localActiveTab = tab; // Actualizar la copia local en lugar de la prop
      this.$emit("update:activeTab", this.localActiveTab); // Emitir evento para actualizar la prop en el padre
    },
  },
};
</script>

<style lang="scss" scoped>
.no-styles {
  all: unset;
}
.home {
  &.active {
    color: #ff4081;
    border-top: #ff4081 solid 2px;
  }
}

.list {
  &.active {
    color: #ff4081;
    border-top: #ff4081 solid 2px;
  }
}

.map {
  &.active {
    color: #ff4081;
    border-top: #ff4081 solid 2px;
  }
}

.fav {
  &.active {
    color: #ff4081;
    border-top: #ff4081 solid 2px;
  }
}

.profile {
  &.active {
    color: #ff4081;
    border-top: #ff4081 solid 2px;
  }
}
</style>
