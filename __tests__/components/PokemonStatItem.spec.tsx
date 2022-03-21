import React from 'react';
import { render } from '@testing-library/react-native';
import PokemonStatItem from '@/presentation/components/organisms/PokemonStatItem';
import { makePokemonStatItemFake } from './faker';

describe('PokemonStatItem Component', () => {
    it('should render the label name of the stat', () => {
        const { getByText } = render(<PokemonStatItem stats={makePokemonStatItemFake(70)} />);
        expect(getByText('Defense')).not.toBeNull();
    });
    it('should render the correct baseStat number of the stat', () => {
        const { getByText } = render(<PokemonStatItem stats={makePokemonStatItemFake(70)} />);
        expect(getByText('70')).not.toBeNull();
    });
});
