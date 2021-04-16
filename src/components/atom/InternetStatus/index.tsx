import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import styles from './styles';
import AppText from '../AppText';

const InternetStatus = () => {
  const [isConnected, setIsConnected] = useState(false);

  const netInfo = useNetInfo();
  useEffect(() => {
    if (netInfo.type === 'cellular') {
      return global.toast.show('Please Note You Are Using Mobile Data');
    }
    setTimeout(() => {
      setIsConnected(true);
    }, 1000);
  }, [netInfo.type]);

  return (
    <>
      {isConnected && !netInfo.isConnected && (
        <View style={styles.container}>
          <View style={styles.connection}>
            <AppText style={styles.text}>{'No Internet Connection'}</AppText>
          </View>
        </View>
      )}
    </>
  );
};

export default React.memo(InternetStatus);
