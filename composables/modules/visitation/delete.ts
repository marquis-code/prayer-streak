import { visitation_api } from "@/api_factory/modules/visitation";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();
const loading = ref(false);

export const useDeleteVisitation = () => {
  const deleteVisitation = async (id: string | number) => {
    loading.value = true;
    const res = (await visitation_api.$_delete_visitation(id)) as any;

    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Visitation was deleted successfully",
        toastType: "success",
        duration: 3000,
      });
    } else {
      showToast({
        title: "Error",
        message: res.data.error,
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  return { deleteVisitation, loading };
};
