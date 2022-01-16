import React from 'react';
import {Number} from './styles';
import {getFormattedIdNumber} from '@/presentation/helpers';

type Props = {
  number: number;
};

const PokemonNumber: React.FC<Props> = ({number}: Props) => {
  return <Number>{getFormattedIdNumber(number)}</Number>;
};

export default PokemonNumber;
