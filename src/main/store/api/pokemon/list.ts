import {PokemonModel} from '@/domain/models';
import {pokemonApi} from '@/main/store/api';
import {getIdFromUrl} from '@/main/utils';
import {
  ListQueryParameters,
  RemoteListResponse,
  RemotePokemonItemListResponse,
  RemotePokemonSpecieResponse,
  RemoteFlavorTextEntry,
  RemoteMoves,
} from './listTypes';

const pokemonListApi = pokemonApi.injectEndpoints({
  endpoints: builder => ({
    getPokemonList: builder.query<PokemonModel[], ListQueryParameters>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const pokemonListResult = await fetchWithBQ(
          `pokemon?limit=${_arg.limit}&offset=${_arg.offset}`,
        );

        const { results } = pokemonListResult.data as RemoteListResponse;

        const pokemonList = (await Promise.all(
          results.map(pokemonItem =>
            fetchWithBQ(`pokemon/${pokemonItem.name}`),
          ),
        )) as { data: RemotePokemonItemListResponse }[];

        const idsSpecies = pokemonList.map(({ data: pokemon }) => {
          return getIdFromUrl(pokemon.species.url);
        });

        const speciesList = (await Promise.all(
          idsSpecies.map(id => fetchWithBQ(`pokemon-species/${id}`)),
        )) as { data: RemotePokemonSpecieResponse }[];

        const formattedResponse = getFormattedResponse(
          pokemonList,
          speciesList,
        );

        if (!formattedResponse.length) {
          return { status: 'FETCH_ERROR', data: [] as PokemonModel[] };
        }

        return { data: formattedResponse };
      },
    }),
  }),
  overrideExisting: false,
});

const getFormattedResponse = (
  pokemonList: {data: RemotePokemonItemListResponse}[],
  speciesList: {data: RemotePokemonSpecieResponse}[],
): PokemonModel[] => {
  return pokemonList.map(({data: remotePokemon}, index) => {
    return {
      id: remotePokemon.id,
      name: remotePokemon.name,
      image: remotePokemon.sprites.other.home.front_default,
      types: remotePokemon.types.map(typeItem => typeItem.type.name),
      colorNameSpecie: speciesList[index].data.color.name,
      height: remotePokemon.height,
      weight: remotePokemon.weight,
      stats: remotePokemon.stats.map(statsItem => {
        return {name: statsItem.stat.name, baseStat: statsItem.base_stat};
      }),
      mainDescription: getFormattedFlavorText(
        speciesList[index].data.flavor_text_entries,
      ),
      mainPower: getMainPower(remotePokemon.moves),
    };
  });
};

const getFormattedFlavorText = (
  remoteFlavorTextEntries: RemoteFlavorTextEntry[],
): string => {
  const remoteFlavorTextEntry = remoteFlavorTextEntries.find(
    flavorTextEntry => flavorTextEntry.version.name === 'ruby',
  );
  return remoteFlavorTextEntry
    ? remoteFlavorTextEntry.flavor_text.replace(/\n/g, '')
    : '';
};

const getMainPower = (
  remoteMoves: RemoteMoves[],
): string => {

  let initialValues: { move: RemoteMoves, levelLearnedSummed: number }[] = [];

  let movesWithLevelLearnedSummed = remoteMoves.reduce((accumulator, currentMove) => {
    const levelLearnedSummed = currentMove.version_group_details.reduce(
      (innerAccumulator, currentVersioGroupDetails) => currentVersioGroupDetails.level_learned_at + innerAccumulator, 0
    );
    accumulator.push({ move: currentMove, levelLearnedSummed: levelLearnedSummed });
    return accumulator;

  }, initialValues);

  const moveWithBiggerLevelLearned = movesWithLevelLearnedSummed.reduce((prevMove, currentMove) => {
    return prevMove.levelLearnedSummed > currentMove.levelLearnedSummed ? prevMove : currentMove;
  });

  return moveWithBiggerLevelLearned.move.move.name;
};


export const { useGetPokemonListQuery } = pokemonListApi;
