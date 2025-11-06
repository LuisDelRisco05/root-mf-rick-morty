import { useCharacters } from "@/application/hooks/useCharacters";
import { useCharactersStore } from "@/presentation/store/useCharacterStore";
import { Layout } from "@/presentation/layout/layout";
import { lazy, Suspense } from "react";
import { Box } from "@mui/material";

const CharacterList = lazy(() => import("remoteCharacters/mf-characters"));

export const Home = () => {
  const { query, characters, favorites, setFavorites } = useCharactersStore();
  useCharacters(query);

  return (
    <Layout>
      <Box sx={{ width: '100%', height: '100%', paddingBottom: '64px', paddingTop: '24px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Suspense fallback={<div>Loading...</div>}>
          <CharacterList characters={characters} favorites={favorites} setFavorites={setFavorites} />
        </Suspense>
      </Box>
    </Layout>
  );
};
