import React from 'react';
import {Container, StatName, BaseStat, StatItemGraphWrapper} from './styles';
import {Stats} from '@/domain/models';
import {StatItemGraph} from '@/presentation/components/molecules';

type Props = {
  stats: Stats;
};

const PokemonStatItem: React.FC<Props> = ({stats}: Props) => {
  return (
    <Container>
      <StatName>{stats.name}</StatName>
      <BaseStat>{stats.baseStat}</BaseStat>
      <StatItemGraphWrapper>
        <StatItemGraph baseStat={stats.baseStat} />
      </StatItemGraphWrapper>

    </Container>
  );
};

export default PokemonStatItem;
