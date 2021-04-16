import { StyleSheet } from 'react-native';
import { COLORS, STYLES } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: calcWidth(20),
    marginBottom: calcWidth(5),
    borderRadius: calcWidth(10),
    marginHorizontal:calcWidth(15),
    ...STYLES.shadow,
  },
  image: {
    width: calcHeight(80),
    height: calcHeight(80),
    borderRadius: calcHeight(40),
    marginRight: calcWidth(20),
  },
  name: {
    fontSize: calcFont(17),
    flex: 1,
    marginRight: calcWidth(20),
  },
  icon: {
    right: calcWidth(20),
    position: 'absolute',
  },
});
