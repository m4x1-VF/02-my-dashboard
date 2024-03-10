"use client";

import Image from "next/image";
import Link from "next/link";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-48 lg:w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg h-[285px]">
        <div className=" bg-gray-800 border-b flex flex-col items-center justify-center h-[230px] lg:h-[245px]">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
            width={100}
            height={100}
            className="h-24 w-24"
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              View Profile
            </Link>
          </div>
        </div>
        <div className="border-b py-1">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
          >
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              {isFavorite ? (
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Favourite
                </p>
              ) : (
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Not Favourite
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
