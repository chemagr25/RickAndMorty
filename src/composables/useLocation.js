import { ref, triggerRef } from "vue";
import { apiResources } from "../api/api";
const locations = ref([]);
const totalPages = ref(0);
const isLoading = ref(false);

export const useLocation = () => {
  const getAllLocations = async (page) => {
    isLoading.value = true;

    try {
      const { data } = await apiResources.get(`/location?page=${page}`);

      const { info, results } = data;

      locations.value = results;
      totalPages.value = info.pages;
      isLoading.value = false;
    } catch (e) {
      isLoading.value = false;
    }
  };

  return {
    getAllLocations,
    locations,
    isLoading
  };
};
