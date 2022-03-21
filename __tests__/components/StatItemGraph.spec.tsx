import React from 'react';
import { render } from '@testing-library/react-native';
import { StatItemGraph } from '@/presentation/components/molecules';
import { Colors } from '@/presentation/helpers';

describe('BaseStatBar Component', () => {
    it('should render the correct color if baseStat is minor than 60', () => {
        const { getByTestId } = render(<StatItemGraph baseStat={50} />);
        expect(getByTestId('base-stat-bar')).toHaveStyleRule('background-color', Colors.RED);
    });
    it('should render the correct color if baseStat is major or equal to 60', () => {
        const { getByTestId } = render(<StatItemGraph baseStat={70} />);
        expect(getByTestId('base-stat-bar')).toHaveStyleRule('background-color', Colors.GREEN);
    });
});
