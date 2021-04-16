import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../common';
import {calcFont, calcHeight, calcWidth} from '../../../utils';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  connection: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: calcHeight(30),
    flexDirection: 'row',
    backgroundColor: COLORS.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.regular,
    textAlign: 'center',
    marginRight: calcWidth(10),
    fontSize: calcFont(12),
  },
});
