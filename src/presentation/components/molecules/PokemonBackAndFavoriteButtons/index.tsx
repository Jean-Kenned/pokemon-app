import React from 'react';
import {Container, BackButtonWrapper} from './styles';
import BackIcon from '@/presentation/assets/icons/back_Icon.svg';
import HeartIcon from '@/presentation/assets/icons/heart_icon.svg';
import {useNavigation} from '@react-navigation/native';
import {PokemonProps} from '@/main/routes/routes.types';

const PokemonBackAndFavoriteButtons: React.FC = () => {
  const navigation = useNavigation<PokemonProps['navigation']>();

  return (
    <Container>
      <BackButtonWrapper onPress={() => navigation.goBack()} testID="back-icon-wrapper">
        <BackIcon testID="back-icon"/>
      </BackButtonWrapper>
      <HeartIcon testID="heart-icon"/>
    </Container>
  );
};

export default PokemonBackAndFavoriteButtons;
