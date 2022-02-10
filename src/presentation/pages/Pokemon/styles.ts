import {Colors} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Body = styled.View`
  flex: 1;
  background-color: ${Colors.WHITE};
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  margin-top: -25px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  transform: scale(1.5);
`;

export const ImageWrapper = styled.View`
  width: 100%;
  align-items: center;
  margin-top: -200px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  z-index: -1;
`;
