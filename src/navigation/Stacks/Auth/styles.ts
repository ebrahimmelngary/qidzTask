import { StyleSheet } from 'react-native';
import { FONTS } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

export default StyleSheet.create({
  editTextStyle: {
    ...FONTS.bold,
    fontSize: calcFont(20),
  },
  addItemStyle: {
    width: calcWidth(117),
    marginTop:calcHeight(10),
  },
});
