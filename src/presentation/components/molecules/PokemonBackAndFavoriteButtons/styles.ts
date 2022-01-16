import {Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding-top: ${Spacing.DEFAULT};
`;

export const BackButtonWrapper = styled.TouchableOpacity`
  padding: ${Spacing.SMALL};
`;
