import React from 'react';
import {Stats} from '@/domain/models';
import {Container} from './styles';
import {PokemonStatItem} from '@/presentation/components/organisms';

type Props = {
  stats: Stats[];
};

const StatsList: React.FC<Props> = ({stats}: Props) => {
  return (
    <Container>
      {stats.map((statsItem, index) => {
        return <PokemonStatItem key={index} stats={statsItem} />;
      })}
    </Container>
  );
};

export default StatsList;
