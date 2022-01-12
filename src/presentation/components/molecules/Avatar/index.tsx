import React from 'react';
import {Container, BackgroundWrapper, AvatarImageWrapper} from './styles';
import BackgroundAvatar from '@/presentation/assets/images/background_avatar.svg';
import {AvatarImage} from '@/presentation/components/atoms';

const Avatar: React.FC = () => {
  return (
    <Container>
      <BackgroundWrapper>
        <BackgroundAvatar height="150" width="150" />
      </BackgroundWrapper>
      <AvatarImageWrapper>
        <AvatarImage />
      </AvatarImageWrapper>
    </Container>
  );
};

export default Avatar;
