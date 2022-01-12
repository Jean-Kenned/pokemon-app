import {Colors} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 50px;
  height: 55px;
  border-radius: 10px;
  border-width: 2px;
  border-color: white;
  overflow: hidden;
`;

export const DotNotification = styled.View`
  position: absolute;
  width: 10px;
  height: 10px;
  top: -6px;
  right: -6px;
  border-radius: 10px;
  background-color: ${Colors.RED};
`;
