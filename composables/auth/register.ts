import { useUser } from "@/composables/auth/user";
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

import { useRouter, useNuxtApp } from "#imports";
const credential = {
  name: ref(""),
  email: ref(""),
  password: ref("")
};

export const use_auth_register = () => {
  const loading = ref(false);
  const router = useRouter();

  const register = async () => {
    loading.value = true;
    const payload = {
      name: credential.name.value,
      email: credential.email.value,
      password: credential.password.value,
    }

    try {
      const res = await auth_api.$_register(payload) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: 'Signup was successful',
          toastType: "error",
          duration: 3000
        });
        router.push('/login');
      } else {
        showToast({
          title: "Error",
          message: res.data.error,
          toastType: "error",
          duration: 3000
        });
      }
    } catch (error) {
      loading.value = false;
      showToast({
        title: "Error",
        message: 'Registration failed. Please try again',
        toastType: "error",
        duration: 3000
      });
    }
  };

const populateObj = (data: any) => {
   credential.name.value = data.name
   credential.email.value = data.email
   credential.password.value = data.password
}

const isFormDisabled = computed(() => {
  return (
    loading.value ||
    !credential.name.value ||
    !credential.password.value ||
    credential.password.value.length <= 6 
  );
});


  return { credential, register, loading, isFormDisabled, populateObj };
};
