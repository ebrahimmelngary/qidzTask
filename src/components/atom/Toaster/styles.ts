import {StyleSheet} from 'react-native';
import { COLORS } from '../../../common';
import { calcFont, calcHeight, calcWidth } from '../../../utils';

export default StyleSheet.create({
    toastStyle: {
        backgroundColor: COLORS.gray ,
        padding: calcHeight(15),
        borderRadius: calcWidth(50),
    },
    textStyle: {
        fontSize: calcFont(13),
    }
})