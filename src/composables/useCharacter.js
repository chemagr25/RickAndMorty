import { ref } from "vue";
import { apiResources } from "../api/api";

const characters = ref([]);


export const useCharacter = () => {
  const isLoading = ref(false);

  const getCharacters = async (page) => {
    isLoading.value = true;

    const { data } = await apiResources.get(`/character/?page=${page}`);

    console.log(data)

    const { info, results } = data;



    characters.value = results;

    isLoading.value = false;
  };

  return {
    characters,
    getCharacters,
    isLoading,
  };
};
