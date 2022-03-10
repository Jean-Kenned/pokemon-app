import {Colors} from '@/presentation/helpers';
import styled from 'styled-components/native';

type BaseStatBarProps = {
  baseStat: number;
};

export const Container = styled.View`
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 110px;
  height: 3px;
`;

export const BaseStatBar = styled.View<BaseStatBarProps>`
  background-color: ${props =>
    props.baseStat > 59 ? Colors.GREEN : Colors.RED};
  border-radius: 110px;
  height: 3px;
  width: ${props => props.baseStat}%;
`;
