import React from 'react';
import {BaseStatBar, Container} from './styles';

type Props = {
  baseStat: number;
};

const StatItemGraph: React.FC<Props> = ({baseStat}: Props) => {
  return (
    <Container>
      <BaseStatBar baseStat={baseStat} testID="base-stat-bar"/>
    </Container>
  );
};

export default StatItemGraph;
