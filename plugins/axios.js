export default function ({ $axios, store }) {
  $axios.defaults.withCredentials = true;

  $axios.onRequest((config) => {
    const token = store.state.auth.token;
    if (token) {
      config.headers.common["Authorization"] = `Bearer ${token}`;
    }
  });
}
