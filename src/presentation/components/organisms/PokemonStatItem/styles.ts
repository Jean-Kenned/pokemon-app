import {Fonts, Spacing, Colors} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding-vertical: ${Spacing.SMALL};
  flex-direction: row;
  align-items: center;
`;

export const StatName = styled.Text`
  font-size: ${Fonts.SIZE_1_5x};
  color: ${Colors.DARK_GRAY};
  flex: 2;
  font-weight: 500;
  text-transform: capitalize;
`;

export const BaseStat = styled.Text`
  font-size: ${Fonts.SIZE_1_5x};
  color: ${Colors.DARK_GRAY};
  flex: 1;
`;
