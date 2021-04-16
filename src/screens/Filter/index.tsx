import * as React from 'react';
import {Alert, FlatList, SafeAreaView} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import HorizontalList from './Components/HorizontalList';
import VerticalList from './Components/VerticalList';
import RangeCard from './Components/RangeCard';
import Collapsible from '../../components/molecules/Collapsible';
import {filterData} from '../../components/FilterData';
import Button from '../../components/atom/Button';

const Filter = () => {
  const [state, setState] = React.useState({
    buy: null,
    condtion: null,
    price: {
      min: null,
      max: null,
    },
    quntity: {
      min: null,
      max: null,
    },
    sellerRate: {
      min: null,
      max: null,
    },
    brand: null,
    matrial: null,
    size: null,
  });
  return (
    <Modal style={styles.modal} isVisible={true}>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <Collapsible title={'Buying Format'}>
                <HorizontalList
                  data={filterData.buyingFormat}
                  selected={state.buy}
                  onPress={(item) => setState({buy: item.name})}
                />
              </Collapsible>
              <Collapsible title={'Condtion'}>
                <HorizontalList
                  data={filterData.condition}
                  selected={state.buy}
                  onPress={(item) => setState({condtion: item.name})}
                />
              </Collapsible>
              <Collapsible title={'Price'}>
                <RangeCard
                  min={filterData.price.min}
                  max={filterData.price.max}
                />
              </Collapsible>
              <Collapsible title={'Quantity'}>
                <RangeCard
                  min={filterData.quntity.min}
                  max={filterData.quntity.max}
                />
              </Collapsible>
              <Collapsible title={'Seller Rate'}>
                <RangeCard
                  min={filterData.sellerRate.min}
                  max={filterData.sellerRate.max}
                />
              </Collapsible>
              <Collapsible title={'Brand'}>
                <VerticalList
                  data={filterData.brand}
                  selected={state.brand}
                  onPress={(item) => setState({brand: item.name})}
                />
              </Collapsible>
              <Collapsible title={'Matrial'}>
                <VerticalList
                  data={filterData.material}
                  selected={state.matrial}
                  onPress={(item) => setState({matrial: item.name})}
                />
              </Collapsible>
              <Collapsible title={'Size'}>
                <HorizontalList
                  data={filterData.sizes}
                  selected={state.size}
                  onPress={(item) => setState({size: item.name})}
                />
              </Collapsible>
            </>
          }
        />
        <Button title={'View Result'} onPress={() => Alert.alert('Result')} />
      </SafeAreaView>
    </Modal>
  );
};

export default React.memo(Filter);
