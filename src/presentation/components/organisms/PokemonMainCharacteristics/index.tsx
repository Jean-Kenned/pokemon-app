import React from 'react';
import {Container, Separator} from './styles';
import {PokemonModel} from '@/domain/models';
import {PokemonMainCharacteristicCard} from '@/presentation/components/molecules';
import HeightIcon from '@/presentation/assets/icons/height_icon.svg';
import WeightIcon from '@/presentation/assets/icons/weight_icon.svg';

type Props = {
  pokemon: PokemonModel;
};

const PokemonMainCharacteristic: React.FC<Props> = ({pokemon}: Props) => {
  return (
    <Container>
      <PokemonMainCharacteristicCard
        Icon={HeightIcon}
        label="Height"
        value={`${pokemon.height} m`}
      />
      <Separator />
      <PokemonMainCharacteristicCard
        Icon={WeightIcon}
        label="Weight"
        value={`${pokemon.weight} kg`}
      />
      <Separator />
      <PokemonMainCharacteristicCard
        label="Main Power"
        value={pokemon.mainPower}
      />
    </Container>
  );
};

export default PokemonMainCharacteristic;
