import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Platform} from 'react-native';

const calcWidth: (p: number) => number = (pixels: number) => {
  const deviceRatio = (pixels * 100) / 375;
  return wp(deviceRatio);
};

const calcHeight: (p: number) => number = (pixels: number) => {
  const deviceRatio = (pixels * 100) / 812;
  return hp(deviceRatio);
};

const calcFontWeight: (w: number) => string | null = (weight: number) => {
  return Platform.OS === 'ios' ? String(weight) : null;
};

export {calcWidth, calcHeight, calcHeight as calcFont, calcFontWeight};
