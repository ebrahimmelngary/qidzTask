import {StyleSheet, Dimensions} from 'react-native';
import {calcFont, calcHeight} from '../utils';
import { COLORS } from './Colors';

export const DEVICE_HEIGHT = Dimensions.get('screen').height;
export const DEVICE_WIDTH = Dimensions.get('screen').width;

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: COLORS.secondary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
});

export const ACTIVE_OPACITY = 0.8;

export const INPUT_WRAPPER = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: calcHeight(50),
    marginBottom: calcHeight(10),
    justifyContent: 'center',
  },
  text: {
    fontSize: calcFont(18),
    color: COLORS.white,
    paddingTop: calcHeight(5),
  },
  placeholderText: {
    color: COLORS.gray,
  },
});
