import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export const use_auth_reset_password = () => {
  const Router = useRouter();
  const route = useRoute();
  const credential = {
    password: ref(""),
    confirmPassword: ref(""),
  };

  const loading = ref(false);


  const isFormDisabled = computed(() => {
    return (
      loading.value || !credential.confirmPassword.value || !credential.password.value || passwordMismatch.value
    );
  });

  const reset_password = async () => {
    loading.value = true;
    const res = (await auth_api.$_reset_password({
      otpId: route?.query?.otpId,
      password: credential.password.value,
    })) as any;

    console.log(res, "es here");

    loading.value = false;
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: res.data.message,
        toastType: "success",
        duration: 3000
      });
      Router.push("/login");
    } else {
      showToast({
        title: "Error",
        message: res.data.error || "Something went wrong!",
        toastType: "error",
        duration: 3000
      });
    }
  };

    // Computed properties for validation
const passwordMismatch = computed(() => {
	return credential.password.value !== credential.confirmPassword.value;
  });
  

  return { credential, reset_password, loading, isFormDisabled, passwordMismatch };
};
