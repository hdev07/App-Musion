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

        dispatch("refreshToken");
        this.$router.push("/home");
      }
    } catch (error) {
      console.error(error);
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
      console.error(error);
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
