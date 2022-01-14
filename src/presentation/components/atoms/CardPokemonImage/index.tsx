import React from 'react';
import {Image} from './styles';

type Props = {
  image: string;
};

const CardPokemonImage: React.FC<Props> = ({image}: Props) => {
  return <Image source={{uri: image}} />;
};

export default CardPokemonImage;
