import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
