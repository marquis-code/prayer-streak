import { visitation_api } from "@/api_factory/modules/visitation";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

const { showToast } = useCustomToast();
const loading = ref(false);
const availabilityTimesList = ref([]);
const route = useRoute() as any

export const useFetchAvailabilityTimes = () => {
  const getAvailabilityTimes = async (dayId: string | number) => {
    loading.value = true;
    try {
      const res = (await visitation_api.$_get_availability_time_in_selected_day(route?.params?.id, dayId)) as any;
      console.log(res, 'res times here')
      if (res.type !== "ERROR") {
        availabilityTimesList.value = res.data;
        return res;
      } else {
        showToast({
          title: "Error",
          message: res.data.error,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      // showToast({
      //   title: "Error",
      //   message: "An error occurred while fetching availabilityTimesList.",
      //   toastType: "error",
      //   duration: 3000,
      // });
      console.error("Error fetching availabilityTimesList:", error);
    } finally {
      loading.value = false;
    }
  };

  return { getAvailabilityTimes, loading, availabilityTimesList };
};
