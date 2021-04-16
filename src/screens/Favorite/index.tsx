import * as React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/molecules/MovieCard';
import navigateToScreen from '../../navigation/Navigator';
import styles from './styles';


const Favroite = () => {
  const wishList = useSelector(
    (state: { wishList: { myWishList: [] } }) => state.wishList?.myWishlist,
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishList}
        renderItem={({ item }) => <MovieCard item={item} onPress={() => navigateToScreen({ name: 'MovieDetails', params: item })} />}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default React.memo(Favroite);
