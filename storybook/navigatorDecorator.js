import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Helper component tor create a Dummy Stack to access {navigation} object on *.story.tsx files
 *
 * @usage add this decorator
 * ```
 * .addDecorator(ReactNavigationDecorator)
 * ```
 */

const StoryBookStack = createStackNavigator();

const ReactNavigationDecorator = (story) => {
  const Screen = () => story();
  return (
    <NavigationContainer independent={true}>
      <StoryBookStack.Navigator>
        <StoryBookStack.Screen
          name="MyStorybookScreen"
          component={Screen}
          options={{header: () => null}}
        />
      </StoryBookStack.Navigator>
    </NavigationContainer>
  );
};

export default ReactNavigationDecorator;
