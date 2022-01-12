import React from 'react';
import {View} from 'react-native';
import {DotNotification, Image} from './styles';

const Avatar: React.FC = () => {
  return (
    <View>
      <Image source={require('@/presentation/assets/images/ronaldinho.jpg')} />
      <DotNotification />
    </View>
  );
};

export default Avatar;
