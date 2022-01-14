import React from 'react';
import {Number} from './styles';
import {getFormattedIdNumber} from '@/presentation/helpers';

type Props = {
  number: number;
};

const CardPokemonNumber: React.FC<Props> = ({number}: Props) => {
  return <Number>{getFormattedIdNumber(number)}</Number>;
};

export default CardPokemonNumber;
