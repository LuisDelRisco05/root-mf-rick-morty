import axiosConfig from "@/config/api";

export const characterService = {

  async getAllCharacters() {
    const response = await axiosConfig.get(`/character`);
    return response.data.results;
  },

  async getCharactersByName(name: string) {
    const response = await axiosConfig.get(`/character`, {
      params: { name },
    });
    return response.data.results;
  },
};