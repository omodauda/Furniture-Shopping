import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from '@navigations/AppNavigator';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {store, persistor} from '@store/store';
import {Provider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
// import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigator />
          <FlashMessage position="top" duration={3000} floating />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
};
export {queryClient};
export default App;
