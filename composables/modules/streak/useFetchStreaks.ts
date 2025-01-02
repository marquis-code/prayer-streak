import { streak_api } from "@/api_factory/modules/streak";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

export const useFetchStreaks = () => {
  const streakList = ref([])
  const { showToast } = useCustomToast();
  const fetching = ref(false);

  const fetchStreaks = async () => {
    fetching.value = true;
    const res = await streak_api.$_fetch_streaks() as any
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Streaks fetched successfully.",
        toastType: "success",
        duration: 3000,
      });
      streakList.value = res.data ?? []
    } else {
      showToast({
        title: "Error",
        message: res.data.error,
        toastType: "error",
        duration: 3000,
      });
    }
    fetching.value = false;
  };

  onMounted(() => {
    fetchStreaks()
  })

  return { fetchStreaks, fetching, streakList };
};
