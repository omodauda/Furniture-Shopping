import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@navigations/AppNavigator';
import {store} from '@store/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
