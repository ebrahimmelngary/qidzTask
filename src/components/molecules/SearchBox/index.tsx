import * as React from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, ICONS} from '../../../common';
import {calcFont} from '../../../utils';
import {PressedIcon} from '../../atom/AppIcon';
import styles from './styles';

interface SearchBoxProps {
  containerStyle?: ViewStyle;
  onPressSearch?: () => void;
  isNavigateToSearch?: boolean;
  onPress?: () => void;
  value: String;
}

type Props = SearchBoxProps & TextInputProps;
const SearchBox: React.FC<Props> = ({
  containerStyle,
  onPressSearch,
  isNavigateToSearch,
  onPress,
  value,
  ...props
}: Props) => {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {isNavigateToSearch && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.ovelryViewStyle}
          />
        )}
        <TextInput
          {...props}
          testID="SearchBox"
          placeholder={'Search'}
          placeholderTextColor={COLORS.serach}
          style={styles.textInputStyle}
          value={value}
        />
        <PressedIcon
          disabled={isNavigateToSearch}
          name={ICONS.search}
          onPress={onPressSearch}
          size={calcFont(20)}
          color={COLORS.secondary}
        />
      </View>
    </>
  );
};

export default React.memo(SearchBox);
