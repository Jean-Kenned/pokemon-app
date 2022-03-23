import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PokemonCard from '@/presentation/components/organisms/PokemonCard';
import { makePokemonFake } from './faker';
import { getHexFromColorName } from '@/presentation/helpers';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    __esModule: true,
    ...originalModule,
    useNavigation: () => {
      return { navigate: mockedNavigate };
    },
  };
});

describe('Pokemon Card Component', () => {
  it('should render the correct pokemon name', () => {
    const { getByText } = render(<PokemonCard pokemon={makePokemonFake()} />);
    expect(getByText('bulbasaur')).not.toBeNull();
  });

  it('should render the correct pokemon number', () => {
    const { getByText } = render(<PokemonCard pokemon={makePokemonFake()} />);
    expect(getByText('#001')).not.toBeNull();
  });

  it('should render the correct pokemon types', () => {
    const { getByText } = render(<PokemonCard pokemon={makePokemonFake()} />);
    expect(getByText('grass')).not.toBeNull();
    expect(getByText('poison')).not.toBeNull();
  });

  it('should call the navigate function when clicked', () => {
    const { getByTestId } = render(<PokemonCard pokemon={makePokemonFake()} />);
    fireEvent.press(getByTestId('card-container-1'));
    expect(mockedNavigate).toHaveBeenCalled();
  });

  it('should show the correct background color', () => {
    const { getByTestId } = render(<PokemonCard pokemon={makePokemonFake()} />);
    expect(getByTestId('card-container-1')).toHaveStyleRule('background-color',getHexFromColorName('green', 0.7));
  });


});
