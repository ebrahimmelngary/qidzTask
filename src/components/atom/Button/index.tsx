import React from 'react';
import {
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {calcHeight} from '../../../utils';
import AppText from '../AppText';
export interface Props {
  title: string;
  isBottom?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  onPress: () => void;
  disabled?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Button: React.FC<Props & TouchableOpacityProps> = ({
  title,
  isBottom,
  style,
  titleStyle,
  onPress,
  disabled,
  left,
  right,
  ...props
}: Props & TouchableOpacityProps) => {
  const {bottom} = useSafeAreaInsets();
  const buttonHeight = {height: Number(calcHeight(60)) + bottom / 2};
  const buttonStyle = [
    styles.button,
    style,
    disabled && styles.disabledStyle,
    isBottom && [styles.bottomButton, buttonHeight],
    (right || left) && [styles.horizontalButton],
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonStyle}
      onPress={onPress}
      activeOpacity={0.6}
      {...props}>
      {left}
      <AppText numberOfLines={1} style={[styles.text, titleStyle]}>
        {title}
      </AppText>
      {right}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
