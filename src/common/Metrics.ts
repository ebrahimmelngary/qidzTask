import {calcHeight, calcWidth} from '../utils';
import {Platform} from 'react-native';
const METRICS = {
  extraHeight: Platform.OS === 'ios' ? calcHeight(100) : calcHeight(100),
  headerHeight: calcHeight(100),
  headerHorizontal: calcWidth(15),
  activeOpacity: 0.8,
};

export {METRICS};
