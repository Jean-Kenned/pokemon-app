import {PokemonModel} from '@/domain/models';
import {pokemonApi} from './';

type ListQueryParameters = {
  limit: number;
  offset: number;
};

type RemoteListResponse = {
  results: {name: string}[];
};

type RemotePokemonItemListResponse = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};

const pokemonListApi = pokemonApi.injectEndpoints({
  endpoints: builder => ({
    getPokemonList: builder.query<PokemonModel[], ListQueryParameters>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const resultBQ = await fetchWithBQ(
          `pokemon?limit=${_arg.limit}&offset=${_arg.offset}`,
        );
        if (resultBQ.error) {
          throw resultBQ.error;
        }

        const {results} = resultBQ.data as RemoteListResponse;
        const pokemonList = (await Promise.all(
          results.map(pokemonItem =>
            fetchWithBQ(`pokemon/${pokemonItem.name}`),
          ),
        )) as {data: RemotePokemonItemListResponse}[];

        const formattedResponse = getFormattedResponse(pokemonList);

        if (!formattedResponse.length) {
          return {status: 'FETCH_ERROR', data: [] as PokemonModel[]};
        }

        return {data: formattedResponse};
      },
    }),
  }),
  overrideExisting: false,
});

const getFormattedResponse = (
  pokemonList: {data: RemotePokemonItemListResponse}[],
): PokemonModel[] => {
  return pokemonList.map(({data: remotePokemon}) => {
    return {
      id: remotePokemon.id,
      name: remotePokemon.name,
      image: remotePokemon.sprites.front_default,
      types: remotePokemon.types.map(typeItem => typeItem.type.name),
    };
  });
};

export const {useGetPokemonListQuery} = pokemonListApi;
