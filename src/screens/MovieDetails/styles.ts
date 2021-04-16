import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../common';
import { calcFont, calcHeight, calcWidth } from '../../utils';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {

        paddingHorizontal: calcWidth(15),
    },
    imageContainer: {
        width: DEVICE_WIDTH,
        height: DEVICE_HEIGHT / 2.5,
        marginBottom: calcHeight(10),
    },
    nameText: {
        fontSize: calcFont(20),
        marginBottom: calcHeight(10),
    },
    detailsText: {
        paddingVertical: calcHeight(15),
    },
    icon: {

        marginHorizontal: calcWidth(20)

    }
});
