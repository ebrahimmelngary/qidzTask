import {StackNavigationOptions} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import { METRICS } from '../../common';

export const common_options: StackNavigationOptions = {
  // headerTintColor: COLORS.white,
  headerBackTitle: '',
  headerTruncatedBackTitle: '',
  headerStyle: {
    // backgroundColor: COLORS.kelleyGreen,
    // height: METRICS.headerHeight,
  },
  headerTitleStyle: {
    textTransform: 'capitalize',
  },
  headerLeftContainerStyle: {
    paddingHorizontal: METRICS.headerHorizontal,
  },
  headerRightContainerStyle: {
    paddingHorizontal: METRICS.headerHorizontal,
  },
  headerBackground: () => {
    const style = {height: '100%'};
    return <View style={style} />;
  },
};
