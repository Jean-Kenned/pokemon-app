import {Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundWrapper = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const AvatarImageWrapper = styled.View`
  margin-top: ${Spacing.SMALL};
  position: absolute;
  bottom: 40px;
  right: 40px;
`;
