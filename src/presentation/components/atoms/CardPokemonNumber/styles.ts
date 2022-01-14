import {Spacing, Fonts} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Number = styled.Text`
  font-size: ${Fonts.SIZE_1_8x};
  font-family: Inter-Regular;
  font-weight: 800;
  position: absolute;
  right: ${Spacing.SMALL};
  top: ${Spacing.SMALL};
`;
