import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import styles from './styles';

interface Props {
  style?: TextStyle | Array<TextStyle | undefined | boolean>;
  onPress?: () => void;
  children: React.ReactNode;
}

const AppText: React.FC<Props & TextProps> = ({
  children,
  style,
  onPress,
  ...rest
}: Props & TextProps) => {
  return (
    <Text style={[styles.text, style]} onPress={onPress} {...rest}>
      {children}
    </Text>
  );
};
export default React.memo(AppText);
