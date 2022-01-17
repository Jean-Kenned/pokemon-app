import React from 'react';
import {PokemonProps} from '@/main/routes/routes.types';
import {Container, Body, ImageWrapper, Image, Content} from './styles';
import {
  PokemonPageHeader,
  PokemonMainCharacteristics,
} from '@/presentation/components/organisms';

const Pokemon: React.FC<PokemonProps> = ({route}: PokemonProps) => {
  const {params: pokemon} = route;

  return (
    <Container>
      <PokemonPageHeader pokemon={pokemon} />
      <Body>
        <ImageWrapper>
          <Image source={{uri: pokemon.image}} />
        </ImageWrapper>
        <Content>
          <PokemonMainCharacteristics pokemon={pokemon} />
        </Content>
      </Body>
    </Container>
  );
};

export default Pokemon;
