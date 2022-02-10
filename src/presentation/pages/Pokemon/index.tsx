import React from 'react';
import {PokemonProps} from '@/main/routes/routes.types';
import {Container, Body, ImageWrapper, Image, Content} from './styles';
import {
  PokemonPageHeader,
  PokemonMainCharacteristics,
} from '@/presentation/components/organisms';
import {StatsList} from '@/presentation/components/templates';

const Pokemon: React.FC<PokemonProps> = ({route}: PokemonProps) => {
  const {params: pokemon} = route;

  return (
    <Container>
      <PokemonPageHeader pokemon={pokemon} />
      <Body>
        <ImageWrapper>
          <Image source={{uri: pokemon.image}} />
        </ImageWrapper>
        <Content
          contentContainerStyle={{paddingTop: 56, paddingHorizontal: 16}}>
          <PokemonMainCharacteristics pokemon={pokemon} />
          <StatsList stats={pokemon.stats} />
        </Content>
      </Body>
    </Container>
  );
};

export default Pokemon;
