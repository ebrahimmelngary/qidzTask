import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../screens/Home';
import Favorite from '../../../screens/Favorite';
import MovieDetails from '../../../screens/MovieDetails';
import {common_options} from '../options';
import {PressedIcon} from '../../../components/atom/AppIcon';
import navigateToScreen from '../../Navigator';
import {COLORS, ICONS} from '../../../common';

const MainStackNav = createStackNavigator();

const MainStack: React.FC = () => (
  <MainStackNav.Navigator
    initialRouteName="Home"
    screenOptions={{...common_options}}>
    <MainStackNav.Screen
      name={'Home'}
      component={Home}
      options={{headerTitle: ''}}
    />
    <MainStackNav.Screen
      name={'Favroite'}
      component={Favorite}
      options={{headerTitle: 'My WishList'}}
    />
    <MainStackNav.Screen
      name={'MovieDetails'}
      component={MovieDetails}
      options={{
        headerTitle: '',
        headerRight: () => (
          <PressedIcon
            color={COLORS.secondary}
             name={ICONS.heart}
             size={35}
            onPress={() => navigateToScreen({name: 'Favroite'})}
          />
        ),
      }}
    />
  </MainStackNav.Navigator>
);

export default MainStack;
