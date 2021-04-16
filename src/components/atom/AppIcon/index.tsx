import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  I18nManager,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconButtonProps} from 'react-native-vector-icons/Icon';
import {COLORS} from '../../../common';

const AppIcon: React.FC<IconButtonProps> = (props: IconButtonProps) => (
  <Icon
    {...props}
    style={[styles.icon, props.style]}
    size={25}
    color={COLORS.white}
  />
);

interface PressedIconProps {
  containerStyle?: ViewStyle;
}

type Props = IconButtonProps & TouchableOpacityProps & PressedIconProps;

const PressedIcon: React.FC<Props> = ({
  onPress,
  containerStyle,
  name,
  size,
  color,
  disabled,
  ...props
}: Props) => {
  const opacity_style = {opacity: disabled ? 0.6 : 1};
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={[opacity_style, containerStyle]}
      activeOpacity={0.7}
      disabled={disabled}>
      <AppIcon
        {...props}
        name={name}
        size={size || 25}
        color={color || COLORS.white}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}],
  },
});

export {AppIcon, PressedIcon};
