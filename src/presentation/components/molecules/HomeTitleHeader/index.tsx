import React from 'react';
import {Title, UserName} from './styles';

const HomeTitleHeader: React.FC = () => {
  return (
    <Title>
      Hi, <UserName>Ronaldinho</UserName>
    </Title>
  );
};

export default HomeTitleHeader;
