import { auth_api } from '@/api_factory/modules/auth'
import { useUser } from '@/composables/auth/user'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
export const use_tenant_profile = () => {
  const profileObj = ref({}) as any
  const loading = ref(false);
  const { updateUser } = useUser()

  const fetch_profile = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_fetch_profile();

      if(res.status == 200 || res.status == 201){
         profileObj.value = res.data
		     updateUser(profileObj.value)
      }

    } catch (error) {
          showToast({
            title: "Error",
            message: 'Error Fetching profile.',
            toastType: "error",
            duration: 3000
          });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetch_profile()
  })

  return { fetch_profile, loading, profileObj };
};
