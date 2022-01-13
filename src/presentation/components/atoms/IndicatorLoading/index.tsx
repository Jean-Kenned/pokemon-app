import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors} from '@/presentation/helpers';
import {LoadingWrapper} from './styles';

const IndicatorLoading: React.FC = () => (
  <LoadingWrapper>
    <ActivityIndicator color={Colors.RED} />
  </LoadingWrapper>
);

export default IndicatorLoading;
