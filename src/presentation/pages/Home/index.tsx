import React from 'react';
import {Container, Content} from './styles';
import {HomeHeader} from '@/presentation/components/organisms';
import {PokemonList} from '@/presentation/components/templates';
import {HomeTextTitle, Logo} from '@/presentation/components/atoms';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeHeader />
      <Content>
        <HomeTextTitle />
        <PokemonList />
        <Logo />
      </Content>
    </Container>
  );
};

export default Home;
