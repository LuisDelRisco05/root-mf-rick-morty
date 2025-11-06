import { useEffect } from "react";
import { characterService } from "@/infrastructure/services/characterService";
import { mapToCharacter } from "../mappers/characterMapper";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";

export const useCharacters = (query: string) => {
  const { setCharacters, setLoading } = useCharactersStore();

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      try {
        setLoading(true);

        const data = !query
          ? await characterService.getAllCharacters()
          : await characterService.getCharactersByName(query);

        if (!cancel) {
          setCharacters(data.map(mapToCharacter));
        }
      } catch {
        if (!cancel) setCharacters([]);
      } finally {
        if (!cancel) setLoading(false);
      }
    };

    // ✅ debounce solo si hay búsqueda
    const delay = query ? 600 : 0;
    const timer = setTimeout(fetchData, delay);

    return () => {
      cancel = true;
      clearTimeout(timer);
    };
  }, [query, setCharacters, setLoading]);

  return useCharactersStore(); // devolvemos todo el store (query, characters, loading)
};
