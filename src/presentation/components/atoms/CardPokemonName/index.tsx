import React from 'react';
import {Name} from './styles';

type Props = {
  name: string;
};

const CardPokemonName: React.FC<Props> = ({name}: Props) => {
  return <Name>{name}</Name>;
};

export default CardPokemonName;
