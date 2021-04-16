import { StyleSheet } from 'react-native';
import { COLORS, FONTS, } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

export default StyleSheet.create({
  container: {
    height: calcHeight(40),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: calcWidth(5),
    paddingLeft: calcWidth(25),
    paddingRight:calcWidth(11),
    backgroundColor: COLORS.white,
    marginHorizontal: calcWidth(16),
  },
  textInputStyle: {
    flex: 1,
    fontSize: calcFont(15),
    ...FONTS.regular,
    padding: 0,
  },
  ovelryViewStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
});
