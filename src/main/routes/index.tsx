import React from 'react';
import {Home, Pokemon} from '@/presentation/pages';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '@/main/routes/routes.types';
import {Colors} from '@/presentation/helpers';

const RootStack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.HEADER_BG_COLOR} />
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Pokemon" component={Pokemon} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
