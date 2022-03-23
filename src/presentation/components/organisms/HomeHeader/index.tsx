import React from 'react';
import {Container, TextsWrapper, AvatarWrapper} from './styles';
import {
  Avatar,
  WelcomeText,
  HomeTitleHeader,
} from '@/presentation/components/molecules';

const HomeHeader: React.FC = () => {
  return (
    <Container testID="home-header">
      <TextsWrapper>
        <HomeTitleHeader />
        <WelcomeText />
      </TextsWrapper>
      <AvatarWrapper>
        <Avatar />
      </AvatarWrapper>
    </Container>
  );
};

export default HomeHeader;
