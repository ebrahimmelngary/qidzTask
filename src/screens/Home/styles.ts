import { StyleSheet } from 'react-native';
import { COLORS } from '../../common';
import { calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    listStyle:{
        marginVertical:calcHeight(20),
        flexGrow:1,
    },
    filterButton:{
        width:calcWidth(50),
        height:calcWidth(50),
        borderRadius:calcWidth(50),
        backgroundColor:COLORS.secondary,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:calcHeight(50),
        right:calcWidth(25),
    }
});