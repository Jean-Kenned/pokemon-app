import React from 'react';
import {PokemonProps} from '@/main/routes/routes.types';
import {
  Container,
  Body,
  ImageWrapper,
  Image,
  Content,
  TextDescriptionWrapper,
} from './styles';
import {
  PokemonPageHeader,
  PokemonMainCharacteristics,
} from '@/presentation/components/organisms';
import {StatsList} from '@/presentation/components/templates';
import {DefaultText} from '@/presentation/components/atoms';

const Pokemon: React.FC<PokemonProps> = ({route}: PokemonProps) => {
  const {params: pokemon} = route;

  console.log(pokemon);

  return (
    <Container>
      <PokemonPageHeader pokemon={pokemon} />
      <Body>
        <ImageWrapper>
          <Image source={{uri: pokemon.image}} />
        </ImageWrapper>
        <Content
          contentContainerStyle={{paddingTop: 56, paddingHorizontal: 16}}>
          <TextDescriptionWrapper>
            <DefaultText>{pokemon.mainDescription}</DefaultText>
          </TextDescriptionWrapper>
          <PokemonMainCharacteristics pokemon={pokemon} />
          <StatsList stats={pokemon.stats} />
        </Content>
      </Body>
    </Container>
  );
};

export default Pokemon;
