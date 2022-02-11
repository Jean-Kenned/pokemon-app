export type Stats = {
  name: string;
  baseStat: number;
};

export type PokemonModel = {
  id: number;
  name: string;
  image: string;
  types: string[];
  colorNameSpecie: string;
  height: number;
  weight: number;
  stats: Stats[];
  mainDescription: string;
};
