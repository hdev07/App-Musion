<template>
  <div class="mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg backdrop-blur bg-white/50 rounded-2xl">
      <div class="Img">
        <img
          src="@/public/images/logos/logo-black.svg"
          alt="musion"
          class="mx-auto px-12 py-8"
        />
      </div>
      <div class="TextDescription">
        <h1 class="text-center text-2xl text-black sm:text-3xl">
          Get started today
        </h1>

        <p class="mx-6 mt-4 max-w-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          ipsum repellat dicta voluptatum?
        </p>
      </div>

      <div class="mx-6 mt-4">
        <div class="mt-2">
          <label
            class="relative block overflow-hidden rounded-md border border-black px-3 pt-3"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              class="absolute left-3 top-2 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Email
            </span>
          </label>
          <p class="text-sm p-1 text-red">Email invalid</p>
        </div>

        <div class="mt-2">
          <label
            class="relative block overflow-hidden rounded-md border border-black px-3 pt-3"
          >
            <input
              type="password"
              id="UserPasssword"
              placeholder="Password"
              class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              class="absolute left-3 top-2 -translate-y-1/2 text-xs text-black transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              Password
            </span>
          </label>
          <p class="text-sm p-1 text-red text-right">
            Password or Email invalid
          </p>
        </div>

        <div class="my-6 flex justify-between">
          <v-btn color="success" @click="validate"> Register </v-btn>
          <v-btn color="warning" @click="resetValidation"> Login </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
