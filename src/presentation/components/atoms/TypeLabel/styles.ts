import styled from 'styled-components/native';
import {
  getHexFromColorName,
  Spacing,
  Colors,
  Fonts,
} from '@/presentation/helpers';

export const Container = styled.View`
  background-color: ${getHexFromColorName('white', 0.2)};
  padding-horizontal: ${Spacing.SMALL};
  padding-vertical: ${Spacing.TINY};
  margin-vertical: ${Spacing.TINY};
  border-radius: 32px;
  align-self: flex-start;
`;

export const Label = styled.Text`
  color: ${Colors.WHITE};
  font-size: ${Fonts.SIZE};
  font-family: Inter-Regular;
  text-transform: capitalize;
  font-weight: 800;
`;
