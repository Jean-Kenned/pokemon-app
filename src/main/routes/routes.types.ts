import {PokemonModel} from '@/domain/models';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Pokemon: PokemonModel;
};

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
export type PokemonProps = StackScreenProps<RootStackParamList, 'Pokemon'>;
