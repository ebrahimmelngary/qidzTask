import {StyleSheet} from 'react-native';
import {COLORS} from '../../../common';
import {calcFont, calcHeight} from '../../../utils';

export default StyleSheet.create({
  fullContainer:{
    width: '90%',
    alignSelf: 'center',
    borderColor: COLORS.white,
    paddingBottom: 10,
  },
  container: {
    height: calcHeight(50),
    width: '100%',
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf:'center',
  },
  headerText: {
    color: COLORS.white,
    fontSize: calcFont(15),
  },
});
