/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './redux/store';
import Navigation from './navigation';
import Toaster from './components/atoms/Toaster';
import InternetStatus from './components/atoms/InternetStatus';

const App = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <Navigation />
          <Toaster />
          <InternetStatus />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default React.memo(App);
