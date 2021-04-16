import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {ACTIVE_OPACITY, ICONS} from '../../../common';
import {IMAGE_URL} from '../../../services';
import {AppIcon} from '../../atom/AppIcon';
import AppText from '../../atom/AppText';
import styles from './styles';

interface MovieCardProps {
  item: {
    poster_path: string;
    title: string;
  };
  onPress: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  item,
  onPress,
}: MovieCardProps) => {
  return (
    <TouchableOpacity
      testID="MovieCard"
      style={styles.card}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}>
      <Image
        source={{uri: `${IMAGE_URL}${item.poster_path}`}}
        style={styles.image}
      />
      <AppText style={styles.name} numberOfLines={2}>
        {item.title}
      </AppText>
      <AppIcon name={ICONS.arrow} size={25} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default React.memo(MovieCard);
