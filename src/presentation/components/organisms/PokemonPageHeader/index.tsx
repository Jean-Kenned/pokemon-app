import React from 'react';
import {Container, TypeLabelsWrapper} from './styles';
import {getNormalizedColorName} from '@/presentation/helpers';
import {PokemonModel} from '@/domain/models';
import {
  TypeLabelsContainer,
  PokemonBackAndFavoriteButtons,
  PokemonNameAndNumber,
} from '@/presentation/components/molecules';

type Props = {
  pokemon: PokemonModel;
};

const PokemonPageHeader: React.FC<Props> = ({pokemon}: Props) => {
  return (
    <Container color={getNormalizedColorName(pokemon.colorNameSpecie)} testID="pokemon-page-header">
      <PokemonBackAndFavoriteButtons />
      <PokemonNameAndNumber pokemon={pokemon} />
      <TypeLabelsWrapper>
        <TypeLabelsContainer types={pokemon.types} />
      </TypeLabelsWrapper>
    </Container>
  );
};

export default PokemonPageHeader;
