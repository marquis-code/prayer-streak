import { streak_api } from "@/api_factory/modules/streak";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

const payload = ref({
  title: '',
  date: '',
  time: '',
  description: '',
  includeTime: false
})
export const useCreateStreak = () => {
  const { showToast } = useCustomToast();
  const creating = ref(false);

  const createStreak = async () => {
    creating.value = true;
    const res = await streak_api.$_create_streak(payload.value) as any
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Streak created successfully.",
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
    creating.value = false;
  };

  return { createStreak, creating, payload };
};
