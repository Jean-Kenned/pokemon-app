import {Fonts} from '@/presentation/helpers';
import {Colors} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Name = styled.Text`
  font-size: ${Fonts.SIZE_4x};
  font-family: Inter-Regular;
  color: ${Colors.WHITE};
  font-weight: 800;
  text-transform: capitalize;
`;
