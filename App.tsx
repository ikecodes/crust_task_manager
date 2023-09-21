import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {persistor, store} from './src/slices';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Navigation} from './src/routes';
import {MenuProvider} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/config/toastConfig';

// import SplashScreen from 'react-native-splash-screen';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retry: 2}},
});

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Navigation />
                <Toast
                  position="bottom"
                  bottomOffset={150}
                  config={toastConfig}
                />
              </KeyboardAvoidingView>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

export default App;
