import React from 'react';
import {Container, Title} from './styles';
import {useAppSelector, useAppDispatch} from '@/main/store/hooks';
import {useGetPokemonListQuery} from '@/main/store/api/pokemon';

const Home: React.FC = () => {

  const {
    data: pokemonsList,
    isFetching,
    isLoading,
  } = useGetPokemonListQuery({limit: 10, offset: 0});

  return (
    <Container>
      <Title>Home Page</Title>
    </Container>
  );
};

export default Home;
