import { streak_api } from "@/api_factory/modules/streak";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

export const useUpdateStreak = () => {
  const { showToast } = useCustomToast();
  const updating = ref(false);

  const updateStreak = async (id: string | number, payload: any) => {
    updating.value = true;
    const res = await streak_api.$_update_streak(id, payload) as any
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: `Streak with ID ${id} updated successfully.`,
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
    updating.value = false;
  };

  return { updateStreak, updating };
};
