// middleware/auth.js
export default async function ({ store, app, redirect }) {
  const token = store.state.auth.token;
  const expiresIn = store.state.auth.expiresIn;
  const currentTime = Math.floor(Date.now() / 1000); // Obtiene la hora actual en segundos

  if (!token || !expiresIn || expiresIn <= currentTime) {
    const refreshToken = await app.$cookies.get("refreshToken");

    if (!refreshToken) {
      // No hay refreshToken en las cookies, redirige al usuario al inicio de sesión
      // return redirect("/login");
      console.log(refreshToken);
    } else {
      try {
        // Realizar la solicitud para obtener un nuevo token válido
        const response = await app.$axios.$post("/auth/refresh", {
          refreshToken,
        });

        // Actualizar el token y su tiempo de expiración en Vuex
        store.commit("auth/setToken", response.token);
        store.commit("auth/setExpiresIn", response.expiresIn);
        return redirect("/home");
      } catch (error) {
        // Si ocurre un error al intentar obtener un nuevo token, redirigir al inicio de sesión
        return redirect("/login");
      }
    }
  }
}
