import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import RangeSlider from 'rn-range-slider';
import {COLORS} from '../../../common';
import AppText from '../../../components/atom/AppText';
import {calcHeight, calcWidth} from '../../../utils';

const RangeCard = ({min,max}) => {
  const [low, setLow] = React.useState(0);
  const [high, setHigh] = React.useState(0);

  const handleValueChange = React.useCallback((l, h) => {
    setLow(l);
    setHigh(h);
  }, []);
  return (
    <View style={styles.container}>
      <RangeSlider
        style={styles.slider}
        min={min}
        max={max}
        floatingLabel
        step={1}
        selectionColor={COLORS.white}
        blankColor={COLORS.border}
        onValueChanged={handleValueChange}
      />
      <View style={styles.rangeContainer}>
        <View style={styles.rangeText}>
          <AppText>{low}</AppText>
        </View>
        <View style={styles.rangeText}>
          <AppText>{high}</AppText>
        </View>
      </View>
    </View>
  );
};

export default RangeCard;

const styles = StyleSheet.create({
  container: {},
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: calcWidth(15),
  },
  slider: {
    width: '95%',
    height: calcHeight(70),
    alignSelf: 'center',
  },
  rangeText: {
    borderWidth: 1,
    padding: calcWidth(10),
    borderRadius: calcWidth(5),
    maxWidth: 100,
    borderColor: COLORS.white,
  },
});
