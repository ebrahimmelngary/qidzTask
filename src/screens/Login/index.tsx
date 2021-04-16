import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AppText from '../../components/atom/AppText';
import Button from '../../components/atom/Button';
import { navigate } from '../../navigation';
import styles from './styles';

const Login = () => {
  return (
    <View style={styles.container}>
      <AppText>Please Enter your username abd password</AppText>
      <View style={styles.forms}>

      <TextInput placeholder={'Username'} style={styles.input}/>
      <TextInput placeholder={'passwoerd'} style={styles.input}/>
      </View>

            <Button title={'Login'} onPress={()=>navigate('Main')}/>
    </View>
  );
};

export default Login;
