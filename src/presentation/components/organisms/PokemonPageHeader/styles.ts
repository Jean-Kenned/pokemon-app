import {Fonts, getHexFromColorName, Spacing} from '@/presentation/helpers';
import {Colors} from '@/presentation/helpers';
import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${props => getHexFromColorName(props.color, 0.7)};
  padding: ${Spacing.DEFAULT};
  min-height: 350px;
`;

export const TypeLabelsWrapper = styled.View`
  flex-direction: row;
`;
