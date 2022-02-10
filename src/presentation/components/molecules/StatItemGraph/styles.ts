import {Colors, Fonts, Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

type BaseStatBarProps = {
  baseStat: number;
};

export const Container = styled.View`
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 110px;
  height: 3px;
  flex: 3;
`;

export const BaseStatBar = styled.View<BaseStatBarProps>`
  background-color: ${props =>
    props.baseStat > 59 ? Colors.GREEN : Colors.RED};
  border-radius: 110px;
  height: 3px;
  flex: 5;
  width: ${props => props.baseStat}%;
`;
