import React from 'react';
import {Text, Container} from './styles';
import SmileEmojiIcon from '@/presentation/assets/icons/smile_emoji.svg';

const WelcomeText: React.FC = () => {
  return (
    <Container>
      <Text>Bem Vindo!</Text>
      <SmileEmojiIcon />
    </Container>
  );
};

export default WelcomeText;
