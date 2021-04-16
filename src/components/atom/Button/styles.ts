import {StyleSheet} from 'react-native';
import {calcFont, calcHeight, calcWidth} from '../../../utils';
import {FONTS} from '../../../common';
import {COLORS} from '../../../common/Colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    height: calcHeight(40),
    width: calcWidth(233),
    paddingHorizontal: calcWidth(10),
    borderRadius: calcHeight(40),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledStyle: {
    opacity: 0.7,
  },
  text: {
    color: COLORS.black,
    ...FONTS.regular,
    fontSize: calcFont(20),
  },

  bottomButton: {
    position: 'absolute',
    borderRadius: undefined,
    width: undefined,
    bottom: 0,
    right: 0,
    left: 0,
  },

  horizontalButton: {
    flexDirection: 'row',
  },
});

export default styles;
