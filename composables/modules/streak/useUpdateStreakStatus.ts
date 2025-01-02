import { streak_api } from "@/api_factory/modules/streak";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

const statusPayload = ref({
  status: ''
})
export const useUpdateStreakStatus = () => {
  const { showToast } = useCustomToast();
  const updatingStatus = ref(false);

  const updateStreakStatus = async (id: string | number) => {
    updatingStatus.value = true;
    const res = await streak_api.$_update_streak_status(id, statusPayload.value) as any
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: `Status for streak with ID ${id} updated successfully.`,
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
    updatingStatus.value = false;
  };

  return { updateStreakStatus, updatingStatus, statusPayload };
};
