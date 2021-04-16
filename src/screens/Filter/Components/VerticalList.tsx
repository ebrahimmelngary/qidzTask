import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ICONS} from '../../../common';
import {PressedIcon} from '../../../components/atom/AppIcon';
import AppText from '../../../components/atom/AppText';
import {calcHeight, calcWidth} from '../../../utils';

const Card = ({item, selected, onPress}) => {
  return (
    <View style={styles.cardContainer}>
      <PressedIcon
        onPress={onPress}
        name={selected === item.name ? ICONS.checkboxMarked : ICONS.checkBox}
      />
      <AppText style={styles.text}>{`${item.name} (${item.count})`}</AppText>
    </View>
  );
};

const VerticalList = ({data,selected,onPress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({item}) => <Card selected={selected} item={item} onPress={()=>onPress(item)} />}
      />
    </View>
  );
};

export default VerticalList;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: calcWidth(15),
    height: calcHeight(40),
  },
  text: {
    marginLeft: calcWidth(10),
  },
});
