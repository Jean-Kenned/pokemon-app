import {getHexFromColorName, Spacing} from '@/presentation/helpers';
import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${props => getHexFromColorName(props.color, 0.7)};
  flex: 1;
  border-radius: 15px;
  min-height: 150px;
`;

export const TextsWrapper = styled.View`
  flex: 1;
  margin-top: ${Spacing.MEDIUM};
  margin-left: ${Spacing.DEFAULT};
`;

export const ImageWrapper = styled.View`
  position: absolute;
  right: ${Spacing.SMALL};
  bottom: ${Spacing.DEFAULT};
`;
