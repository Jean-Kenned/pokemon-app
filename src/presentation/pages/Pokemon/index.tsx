import React from 'react';
import {PokemonProps} from '@/main/routes/routes.types';
import {Container, Body, ImageWrapper, Image, Content} from './styles';
import {PokemonPageHeader} from '@/presentation/components/organisms';
import {Text} from 'react-native';

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
          <Text style={{color: 'black'}}>Pokemon description </Text>
        </Content>
      </Body>
    </Container>
  );
};

export default Pokemon;
