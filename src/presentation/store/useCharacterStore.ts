import { create } from "zustand";
import type { Character } from "@/domain/entities/character";

interface CharactersState {
  query: string;
  characters: Character[];
  favorites: Character[];
  loading: boolean;
  setQuery: (value: string) => void;
  setCharacters: (data: Character[]) => void;
  setFavorites: (data: Character[]) => void;
  setLoading: (value: boolean) => void;
}

export const useCharactersStore = create<CharactersState>((set) => ({
  query: "",
  characters: [],
  favorites: [],
  loading: false,

  setQuery: (value) => set({ query: value }),
  setCharacters: (data) => set({ characters: data }),
  setFavorites: (data) => set({ favorites: data }),
  setLoading: (value) => set({ loading: value }),
}));
