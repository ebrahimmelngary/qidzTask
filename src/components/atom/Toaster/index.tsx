import React from 'react';
import Toast from 'react-native-easy-toast';
import styles from './styles';

const Toaster = () => (
    <Toast
        ref={(ref) => (global.toast = ref)}
        fadeInDuration={1000}
        fadeOutDuration={2000}
        positionValue={150}
        style={styles.toastStyle}
        textStyle={styles.textStyle}
    />
);

export default React.memo(Toaster);
