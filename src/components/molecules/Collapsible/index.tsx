/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  LayoutAnimation,
  UIManager,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {COLORS, ICONS} from '../../../common';
import {calcFont} from '../../../utils';
import {AppIcon} from '../../atom/AppIcon';
import AppText from '../../atom/AppText';
import styles from './styles';

interface CollapsibleProps {
  title: String;
  children: any;
}
const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
}: CollapsibleProps) => {
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const expandedHandler = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.fullContainer, {borderBottomWidth: expanded ? 1 : 0}]}>
      <TouchableOpacity
        onPress={expandedHandler}
        style={[styles.container, {borderBottomWidth: expanded ? 0 : 1}]}>
        <AppText style={styles.headerText}>{title}</AppText>
        <AppIcon
          name={expanded ? ICONS.upArrow : ICONS.downArrow}
          size={calcFont(25)}
          color={COLORS.white}
        />
      </TouchableOpacity>
      {expanded && <View>{children}</View>}
    </View>
  );
};

export default React.memo(Collapsible);
