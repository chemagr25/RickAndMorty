import { ref } from "vue";
import { apiResources } from "../api/api";
import axios from "axios";

const characters = ref([]);
const characterById = ref();
const characterEpisodes = ref([]);
const totalPages = ref();

export const useCharacter = () => {
  const isLoading = ref(false);

  const getCharacters = async (page) => {
    isLoading.value = true;

    try {
      const { data } = await apiResources.get(`/character/?page=${page}`);
      const { info, results } = data;
      totalPages.value = info.pages;
      characters.value = results;
      isLoading.value = false;
    } catch {
      isLoading.value = false;
    }
  };

  const getCharacterById = async (id) => {
    try {
      characterEpisodes.value = [];
      isLoading.value = true;
      const { data } = await apiResources.get(`/character/${id}`);

      characterById.value = data;

      data.episode.map(async (episode) => {
        const { data } = await axios.get(episode);
        characterEpisodes.value.push(data);
      });
      isLoading.value = false;
    } catch {
      isLoading.value = false;
    }
  };

  const searchCharacters = async (name) => {
    try {
      const { data } = await apiResources.get(`/character/?name=${name}`);
      const { info, results } = data;

      totalPages.value = info.pages;
      characters.value = results;

    } catch {
      characters.value = [];
      totalPages.value = 0;
    }
  };

  return {
    getCharacterById,
    characterById,
    characters,
    getCharacters,
    isLoading,
    characterEpisodes,
    searchCharacters,
    totalPages,
  };
};
