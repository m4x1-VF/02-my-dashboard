import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Favorites page for Pokemons.",
};

export default async function PokemonsPage() {
  return (
    <section className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons Favoritos</span>
      <FavoritePokemons />
    </section>
  );
}
