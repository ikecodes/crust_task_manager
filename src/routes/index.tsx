import React from 'react';
import 'react-native-get-random-values';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './Auth.routes';
import {useSelector} from 'react-redux';
import ProtectedRoute from './Protected.routes';
import {monoChrome} from '../theme/colors';
import tw from 'twrnc';
export function Navigation() {
  const user = useSelector((state: any) => state.user);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={monoChrome.white} />
      <SafeAreaView style={tw`flex-1`}>
        {user?.isLoggedIn ? <ProtectedRoute /> : <AuthRoute />}
      </SafeAreaView>
    </NavigationContainer>
  );
}
