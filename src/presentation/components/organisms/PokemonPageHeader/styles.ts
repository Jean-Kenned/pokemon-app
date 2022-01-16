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

export const BackAndFavoriteButtonsContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding-vertical: ${Spacing.SMALL};
`;

export const NameAndNumberContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: ${Fonts.SIZE_4x};
  font-family: Inter-Regular;
  color: ${Colors.WHITE};
  font-weight: 800;
  text-transform: capitalize;
`;

export const Number = styled.Text`
  font-size: ${Fonts.SIZE_2_5x};
  font-family: Inter-Regular;
  font-weight: 800;
  color: ${Colors.WHITE};
`;

export const TypeLabelsWrapper = styled.View`
  flex-direction: row;
`;
