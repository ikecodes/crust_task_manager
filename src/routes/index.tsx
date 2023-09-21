import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoute from './Auth.routes';
import {useSelector} from 'react-redux';
import ProtectedRoute from './Protected.routes';
import {monoChrome} from '../theme/colors';

export function Navigation() {
  const user = useSelector((state: any) => state.user);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={monoChrome.white} />
      {user?.isLoggedIn ? <ProtectedRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
}
