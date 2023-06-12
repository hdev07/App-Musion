import Vue from "vue";
const state = () => ({
  token: null,
  expiresIn: null,
});

export const actions = {
  async login({ commit, dispatch, state }, { email, password }) {
    try {
      const body = {
        email,
        password,
      };

      const res = await this.$axios.post("/auth/login", body);
      if (res.status === 200) {
        commit("setToken", res.data?.token);
        commit("setExpiresIn", res.data?.expiresIn);
        Vue.prototype.$displaySuccessAlert("Inicio de sesión exitoso");
        dispatch("refreshToken");
        this.$router.push("/home");
      }
    } catch (error) {
      const e = error.response?.data?.msg;
      Vue.prototype.$displayErrorAlert(e);
    }
  },

  async refreshToken({ commit, dispatch, state }) {
    try {
      if (state.token) {
        const res = await this.$axios.get("/auth/refresh");
        if (res.status === 200) {
          commit("setToken", res.data?.token);
          commit("setExpiresIn", res.data?.expiresIn);

          setTimeout(() => {
            dispatch("refreshToken");
          }, state.expiresIn * 1000 - 6000);
        }
      }
    } catch (error) {
      const e = error.response?.data?.msg;

      Vue.prototype.$displayErrorAlert(e);
    }
  },
};

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setExpiresIn(state, expiresIn) {
    state.expiresIn = expiresIn;
  },
};
