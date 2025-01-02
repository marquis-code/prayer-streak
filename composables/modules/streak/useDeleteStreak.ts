import { streak_api } from "@/api_factory/modules/streak";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

export const useDeleteStreak = () => {
  const { showToast } = useCustomToast();
  const deleting = ref(false);

  const deleteStreak = async (id: string | number) => {
    deleting.value = true;
    const res = await streak_api.$_delete_streak(id) as any
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: `Streak with ID ${id} deleted successfully.`,
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
    deleting.value = false;
  };

  return { deleteStreak, deleting };
};
