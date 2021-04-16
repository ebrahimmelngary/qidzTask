import * as React from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS, ICONS} from '../../common';
import {PressedIcon} from '../../components/atom/AppIcon';
import AppText from '../../components/atom/AppText';
import { addToWishlist, removeFromWishlist } from '../../redux/actions/wishList';
import {IMAGE_URL} from '../../services';
import styles from './styles';

interface FavoriteProps {
  route: {};
}

const Favorite: React.FC<FavoriteProps> = ({route}: FavoriteProps) => {
  const {item} = route?.params;
  const dispatch = useDispatch();
  const wishList = useSelector(
    (state: {wishList: {myWishList: []}}) => state.wishList?.myWishlist,
  );
  const exist = wishList?.findIndex((i: {id: any}) => i.id === item.id) !== -1;

  const onPressBookmark = () => {
    if (exist) {
      dispatch(removeFromWishlist(item.id));
      global.toast.show('Movie removed from wishlist');
    } else {
      dispatch(addToWishlist(item));
      global.toast.show('Movie added to wishlist');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        style={styles.imageContainer}
        resizeMode={'contain'}
        source={{uri: `${IMAGE_URL}${item.poster_path}`}}>
        <PressedIcon
          onPress={onPressBookmark}
          name={ICONS.heart}
          style={styles.icon}
          size={30}
          color={exist ? COLORS.red : COLORS.gray}
        />
      </ImageBackground>
      <View style={styles.innerContainer}>
        <AppText style={styles.nameText}>{item.title}</AppText>
        <AppText>{`Date : ${item.release_date}`}</AppText>
        <AppText>{`Vote Average : ${item.vote_average}`}</AppText>
        <AppText>{`Votes : ${item.vote_count}`}</AppText>
        <AppText>{`Language : ${item.original_language}`}</AppText>
        <AppText style={styles.detailsText}>{item.overview}</AppText>
      </View>
    </ScrollView>
  );
};

export default React.memo(Favorite);
