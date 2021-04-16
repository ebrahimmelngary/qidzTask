import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, FlatList, TouchableOpacity, View} from 'react-native';
import MovieCard from '../../components/molecules/MovieCard';
import SearchBox from '../../components/molecules/SearchBox';
import navigateToScreen from '../../navigation/Navigator';
import {fetchSearchData} from '../../redux/actions/Search';
import styles from './styles';
import {AppIcon} from '../../components/atom/AppIcon';
import {ICONS} from '../../common';
import Filter from '../Filter';

const Home = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData.data);
  const [searchText, setSearchText] = React.useState('');
  return (
    <View style={styles.container}>
      <SearchBox
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        onKeyPress={() => dispatch(fetchSearchData(searchText))}
        onPressSearch={() => dispatch(fetchSearchData(searchText))}
      />
      <FlatList
        data={searchData}
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
      <TouchableOpacity style={styles.filterButton}
       activeOpacity={0.8} onPress={()=>Alert.alert('filter')}>
        <AppIcon name={ICONS.flter} size={25} />
      </TouchableOpacity>
      <Filter />
    </View>
  );
};

export default React.memo(Home);
