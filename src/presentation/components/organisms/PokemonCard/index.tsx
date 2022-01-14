import React from 'react';
import {Container, ImageWrapper, TextsWrapper} from './styles';
import {PokemonModel} from '@/domain/models';
import {
  CardPokemonImage,
  CardPokemonName,
  CardPokemonNumber,
} from '@/presentation/components/atoms';
import {TypeLabelsContainer} from '@/presentation/components/molecules';
import {getNormalizedColorName} from '@/presentation/helpers';

type Props = {
  pokemon: PokemonModel;
};

const PokemonCard: React.FC<Props> = ({pokemon}: Props) => {
  return (
    <Container color={getNormalizedColorName(pokemon.colorNameSpecie)}>
      <CardPokemonNumber number={pokemon.id} />
      <TextsWrapper>
        <CardPokemonName name={pokemon.name} />
        <TypeLabelsContainer types={pokemon.types} />
      </TextsWrapper>
      <ImageWrapper>
        <CardPokemonImage image={pokemon.image} />
      </ImageWrapper>
    </Container>
  );
};

export default PokemonCard;
