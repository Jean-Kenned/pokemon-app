import React from 'react';
import {Text} from './styles';

const DefaultText: React.FC = ({children}) => {
  return <Text testID="default-text">{children}</Text>;
};

export default DefaultText;
