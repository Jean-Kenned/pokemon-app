import React from 'react';
import {Container, Label} from './styles';

type Props = {
  type: string;
};

const TypeLabel: React.FC<Props> = ({type}: Props) => {
  return (
    <Container>
      <Label>{type}</Label>
    </Container>
  );
};

export default TypeLabel;
