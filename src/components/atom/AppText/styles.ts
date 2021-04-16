import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../../common';
import {calcFont} from '../../../utils';

const styles = StyleSheet.create({
  text: {
    fontSize: calcFont(15),
    color: COLORS.black,
    textAlign: Platform.OS === 'ios' ? 'left' : 'auto',
  },
});

export default styles;
