import React from 'react';
import {FlatList} from 'react-native';
import ListRow from './ListRow';
import {splitArrayInPairs} from '@/main/utils';
import {PokemonModel} from '@/domain/models';
import {useGetPokemonListQuery} from '@/main/store/api/pokemon/list';
import {IndicatorLoading} from '@/presentation/components/atoms';
import {useEffect} from 'react';

const PokemonList: React.FC = () => {
  const LIMIT = 10;
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [offSet, setOffSet] = React.useState<number>(0);
  const {data, isFetching} = useGetPokemonListQuery({
    limit: LIMIT,
    offset: offSet,
  });

  const [pokemonList, setPokemonList] = React.useState<PokemonModel[]>([]);

  useEffect(() => {
    if (isFetching || !data) {
      return;
    }
    setPokemonList([...pokemonList, ...data]);
    setRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, offSet]);

  const onRefresh = (): void => {
    setRefreshing(true);
    setPokemonList([]);
    setOffSet(0);
  };

  const loadMorePokemons = (): void => {
    if (pokemonList.length === 0) {
      return;
    }
    setOffSet(offSet + LIMIT);
  };

  return !pokemonList ? (
    <IndicatorLoading />
  ) : (
    <FlatList
      style={{marginTop: 16}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 24}}
      data={splitArrayInPairs(pokemonList)}
      keyExtractor={item => item[0].id}
      refreshing={refreshing}
      onRefresh={onRefresh}
      onEndReached={loadMorePokemons}
      onEndReachedThreshold={0.5}
      renderItem={({item}) => {
        return <ListRow pokemonItem={item} />;
      }}
      ListFooterComponent={() => <IndicatorLoading />}
    />
  );
};

export default PokemonList;
