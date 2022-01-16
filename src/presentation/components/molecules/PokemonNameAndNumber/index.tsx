import {PokemonModel} from '@/domain/models';
import React from 'react';
import {Container} from './styles';
import {PokemonName, PokemonNumber} from '@/presentation/components/atoms';

type Props = {
  pokemon: PokemonModel;
};

const PokemonNameAndNumber: React.FC<Props> = ({pokemon}: Props) => {
  return (
    <Container>
      <PokemonName name={pokemon.name} />
      <PokemonNumber number={pokemon.id} />
    </Container>
  );
};

export default PokemonNameAndNumber;
