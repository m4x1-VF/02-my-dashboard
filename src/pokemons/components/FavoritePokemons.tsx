"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  //const [pokemons, setPokemons] = useState(favoritePokemons);
  return (
    <>
      {favoritePokemons.length > 0 ? (
        <PokemonGrid pokemons={favoritePokemons} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};
