import React from 'react';
import {SvgProps} from 'react-native-svg';
import {Container, IconAndNumberWrapper, Value, Label} from './styles';

type Props = {
  label: string;
  value: string;
  Icon?: React.FC<SvgProps>;
};

const PokemonMainCharacteristicCard: React.FC<Props> = ({
  label,
  value,
  Icon,
}: Props) => {
  return (
    <Container>
      <IconAndNumberWrapper>
        {Icon && <Icon width={25} height={25} />}
        <Value>{value}</Value>
      </IconAndNumberWrapper>
      <Label>{label}</Label>
    </Container>
  );
};

export default PokemonMainCharacteristicCard;
