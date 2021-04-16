/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, ICONS} from '../../../common';
import {AppIcon} from '../../../components/atom/AppIcon';
import AppText from '../../../components/atom/AppText';
import {calcHeight, calcWidth} from '../../../utils';

const Card = ({item, onPress, selected}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <AppIcon name={selected === item.name ? ICONS.check : null} />
      <AppText>{item.name}</AppText>
    </TouchableOpacity>
  );
};
const HorizontalList = ({data,selected,onPress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({item}) => <Card item={item} selected={selected} onPress={()=>onPress(item)}/>}
      />
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    borderWidth: 1,
    borderColor: COLORS.white,
    height: calcHeight(50),
    width: calcWidth(100),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: calcWidth(5),
    marginHorizontal: calcWidth(15),
    marginTop: calcHeight(10),
    justifyContent:'center',
  },
});
