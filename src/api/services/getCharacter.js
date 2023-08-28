import { apiResources } from "../api";

export const getAllCharacters = async () => {
  const { data } = apiResources.get('/character');

 return data
};

