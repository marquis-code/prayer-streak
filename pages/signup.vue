<template>
  <main>
    <div class="flex min-h-screen h-full">
      <div
        class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
      >
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 class="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign an account
            </h2>
            <p class="mt-2 text-sm/6 text-gray-500">
              Already a member?
              <NuxtLink
                to="/login"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Login</NuxtLink
              >
            </p>
          </div>

          <div class="mt-10">
            <div>
              <form @submit.prevent="register" class="space-y-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Full Name</label
                  >
                  <div class="mt-2">
                    <input
                      v-model="credential.name.value"
                      type="text"
                      name="name"
                      id="name"
                      class="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm/6 font-medium text-gray-900"
                    >Email address</label
                  >
                  <div class="mt-2">
                    <input
                      v-model="credential.email.value"
                      type="email"
                      name="email"
                      id="email"
                      class="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div class="mt-2 relative">
                    <input
                      :type="showPassword ? 'text' : 'password'"
                      v-model.trim="credential.password.value"
                      name="password"
                      id="password"
                      autocomplete="current-password"
                      required
                      class="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    <div
                      @click="toggleShowPassword"
                      class="absolute inset-y-0 right-4 top-0 flex items-center cursor-pointer"
                    >
                      <svg
                        v-if="!showPassword"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
                          stroke="#1D2739"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M12.5 11.25L13.75 13.3333"
                          stroke="#1D2739"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.6665 9.16669L18.3332 10.8334"
                          stroke="#1D2739"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.6665 10.8334L3.33317 9.16669"
                          stroke="#1D2739"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 11.25L6.25 13.3333"
                          stroke="#1D2739"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <svg
                        v-if="showPassword"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
                          stroke="#1D2739"
                          stroke-width="2"
                        />
                        <path
                          d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                          stroke="#1D2739"
                          stroke-width="1.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- <div>
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
              <div class="mt-2">
                <input v-model="credential.password.value" type="password" name="password" id="password"  class="block w-full rounded-md bg-white px-3 py-2.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              </div>
            </div> -->

                <div class="flex items-center justify-between">
                  <div class="flex gap-3">
                    <div class="flex h-6 shrink-0 items-center">
                      <div class="group grid size-4 grid-cols-1">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                          class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            class="opacity-0 group-has-[:checked]:opacity-100"
                            d="M3 8L6 11L11 3.5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            class="opacity-0 group-has-[:indeterminate]:opacity-100"
                            d="M3 7H11"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <label
                      for="remember-me"
                      class="block text-sm/6 text-gray-900"
                      >Remember me</label
                    >
                  </div>

                  <div class="text-sm/6">
                    <a
                      href="#"
                      class="font-semibold text-indigo-600 hover:text-indigo-500"
                      >Forgot password?</a
                    >
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    :disabled="isFormDisabled || loading"
                    class="flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {{ loading ? "prcoessing.." : "Sign up" }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="relative hidden w-0 flex-1 lg:block">
    <img class="absolute inset-0 size-full object-cover" src="@/assets/img/prayer4.jpg" alt="">
  </div> -->
      <div class="relative hidden w-0 flex-1 lg:block">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="@/assets/img/prayer3.jpg"
          alt=""
        />
      </div>
    </div>
    <CoreFullScreenLoader :visible="loading" />
  </main>
</template>

<script setup lang="ts">
import { use_auth_register } from "@/composables/auth/register";
const { credential, register, loading, isFormDisabled } = use_auth_register();

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const showPassword = ref(false);
definePageMeta({
  layout: "auth",
});
</script>
