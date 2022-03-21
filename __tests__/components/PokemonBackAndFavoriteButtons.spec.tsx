import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PokemonBackAndFavoriteButtons } from '@/presentation/components/molecules';

const mockedGoBack = jest.fn();

jest.mock('@react-navigation/native', () => {
    const originalModule = jest.requireActual('@react-navigation/native');

    return {
        __esModule: true,
        ...originalModule,
        useNavigation: () => {
            return { goBack: mockedGoBack };
        },
    };
});

describe('PokemonBackAndFavoriteButtons.spec Component', () => {
    it('should render the back icon', () => {
        const { getByTestId } = render(<PokemonBackAndFavoriteButtons />);
        expect(getByTestId('back-icon')).not.toBeNull();
    });

    it('should render the heart icon', () => {
        const { getByTestId } = render(<PokemonBackAndFavoriteButtons />);
        expect(getByTestId('heart-icon')).not.toBeNull();
    });

    it('should call the navigate function when back icon is clicked', () => {
        const { getByTestId } = render(<PokemonBackAndFavoriteButtons />);
        fireEvent.press(getByTestId('back-icon-wrapper'));
        expect(mockedGoBack).toHaveBeenCalled();
    });


});
