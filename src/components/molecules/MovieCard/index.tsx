import React from 'react';
import {TouchableOpacity, Image,View} from 'react-native';
import {ACTIVE_OPACITY, ICONS} from '../../../common';
import {AppIcon} from '../../atom/AppIcon';
import AppText from '../../atom/AppText';
import styles from './styles';

interface MovieCardProps {
  item: {
    Poster: string;
    Title: string;
    Year: string;
    Type : string;
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
      <Image source={{uri: item.Poster}} style={styles.image} />
      <AppText style={styles.name} numberOfLines={2}>
        {item.Title}
      </AppText>
      <View>

      <AppText>{item.Year}</AppText>
      <AppText>{item.Type}</AppText>
      </View>
      <AppIcon name={ICONS.arrow} size={25} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default React.memo(MovieCard);
