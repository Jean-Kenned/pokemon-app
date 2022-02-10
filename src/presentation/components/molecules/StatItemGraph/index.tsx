import React from 'react';
import {BaseStatBar, Container} from './styles';

type Props = {
  baseStat: number;
};

const StatItemGraph: React.FC<Props> = ({baseStat}: Props) => {
  return (
    <Container>
      <BaseStatBar baseStat={baseStat} />
    </Container>
  );
};

export default StatItemGraph;
