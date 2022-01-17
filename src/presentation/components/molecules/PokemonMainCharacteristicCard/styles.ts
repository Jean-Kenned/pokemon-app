import {Colors, Fonts, Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const IconAndNumberWrapper = styled.View`
  flex-direction: row;
  margin-bottom: ${Spacing.SMALL};
  align-items: center;
`;

export const Value = styled.Text`
  color: ${Colors.DARK_GRAY};
  font-size: ${Fonts.SIZE_2x};
  font-weight: 600;
  margin-horizontal: ${Spacing.SMALL};
`;

export const Label = styled.Text`
  color: ${Colors.LABEL_TEXT_COLOR};
  font-size: ${Fonts.SIZE_1_5x};
`;
