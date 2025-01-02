import { visitation_api } from "@/api_factory/modules/visitation";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { ref } from "vue";

const { showToast } = useCustomToast();
const loading = ref(false);
const availabilityList = ref([]);
const route = useRoute() as any

export const useFetchHouseAvailability = () => {
  const getHouseAvailability = async () => {
    loading.value = true;
    try {
      const res = (await visitation_api.$_get_house_availability_by_id(route?.params?.id)) as any;
      console.log(res, 'house availability')
      if (res.type !== "ERROR") {
        availabilityList.value = res?.data ?? []
        return res;
      } else {
        // showToast({
        //   title: "Error",
        //   message: res.data.error,
        //   toastType: "error",
        //   duration: 3000,
        // });
      }
    } catch (error) {
      // showToast({
      //   title: "Error",
      //   message: "An error occurred while fetching availabilityList.",
      //   toastType: "error",
      //   duration: 3000,
      // });
      console.error("Error fetching availabilityList:", error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    if(route?.params?.id){
      getHouseAvailability()
    }
  })

  return { getHouseAvailability, loading, availabilityList };
};
