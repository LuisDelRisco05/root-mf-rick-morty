import type { Character } from "@/domain/entities/character";

type MappedCharacter = {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  location: string;
  gender?: string;
};

export const mapToCharacter = (apiData: Character): MappedCharacter => ({
  id: apiData.id,
  name: apiData.name,
  image: apiData.image,
  species: apiData.species,
  status: apiData.status,
  location: apiData.location?.name ?? "Unknown",
  gender: apiData.gender ?? "Unknown",
});
