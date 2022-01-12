import {Colors, Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${Colors.HEADER_BG_COLOR};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  height: 150px;
  flex-direction: row;
`;

export const TextsWrapper = styled.View`
  flex: 2;
  justify-content: flex-end;
  padding-bottom: ${Spacing.LARGE};
  padding-left: ${Spacing.DEFAULT};
`;

export const AvatarWrapper = styled.View`
  flex: 1;
`;
