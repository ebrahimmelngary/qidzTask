import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainStack from './Stacks/MainStack';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      <RootStack.Screen name="Main" component={MainStack} />
    </RootStack.Navigator>
  );
};

const Navigation: React.FC = () => {
  return (
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
  );
};
export default Navigation;

export const navigate = (name: any, params: object | undefined) => {
  navigationRef.current
    ? navigationRef.current.navigate(name, params)
    : undefined;
};
