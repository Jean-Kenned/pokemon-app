import {Colors, Fonts, Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${Fonts.SIZE_1_8x};
  color: ${Colors.WHITE};
  font-family: Inter-Regular;
  margin-right: ${Spacing.SMALL};
`;
