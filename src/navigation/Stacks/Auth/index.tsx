import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {common_options} from '../options';
import Login from '../../../screens/Login';

const AuthStackNav = createStackNavigator();

const AuthStack: React.FC = () => (
  <AuthStackNav.Navigator
    initialRouteName="Login"
    screenOptions={{...common_options}}>
    <AuthStackNav.Screen
      name={'Login'}
      component={Login}
      options={{headerTitle: ''}}
    />
  </AuthStackNav.Navigator>
);

export default AuthStack;
