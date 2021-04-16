import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, View} from 'react-native';
import MovieCard from '../../components/molecules/MovieCard';
import navigateToScreen from '../../navigation/Navigator';
import {fetchSearchData} from '../../redux/actions/Search';
import styles from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.searchData.data);

  React.useEffect(() => {
    dispatch(fetchSearchData());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.listStyle}
        initialNumToRender={5}
        renderItem={({item}) => (
          <MovieCard
            item={item}
            onPress={() =>
              navigateToScreen({name: 'MovieDetails', params: {item}})
            }
          />
        )}
        keyExtractor={(item, index) => item + index.toString()}
      />
    </View>
  );
};

export default React.memo(Home);
