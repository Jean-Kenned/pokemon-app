import React from 'react';
import {Title, UserName} from './styles';

const HomeTitleHeader: React.FC = () => {
  return (
    <Title>
      Olá, <UserName>Ronaldinho</UserName>
    </Title>
  );
};

export default HomeTitleHeader;
