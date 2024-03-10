import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Pokemons Page",
  description: "List of 151 pokemons.",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const result: PokemonsResponse = await data.json();
  const pokemons = result.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  //throw new Error("Is an test error!");
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <section>
      <span className="text-5xl my-2">Listado de Pokemones</span>
      <PokemonGrid pokemons={pokemons} />
    </section>
  );
}
