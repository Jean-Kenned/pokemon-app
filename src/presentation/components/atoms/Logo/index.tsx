import React from 'react';
import {Container} from './styles';
import LogoImage from '@/presentation/assets/images/logo.svg';

const Logo: React.FC = () => {
  return (
    <Container>
      <LogoImage />
    </Container>
  );
};

export default Logo;
