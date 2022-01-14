import {Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: ${Spacing.DEFAULT};
  margin-bottom: ${Spacing.DEFAULT};
  flex-direction: row;
  align-items: stretch;
`;

export const Separator = styled.View`
  width: ${Spacing.DEFAULT};
`;
