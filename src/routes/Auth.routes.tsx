import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {onboardingRouteStack} from '../constants/routes';
import SignIn from '../screens/auth/SignIn';
import {KeyboardAvoidingView, Platform} from 'react-native';

const Stack = createStackNavigator();
/**
 *
 * @returns Returns all the authentication routes here
 * We are adding all the auth routes here
 */
function AuthRoute() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={onboardingRouteStack.SignIn}>
        <Stack.Screen
          name={onboardingRouteStack.SignIn}
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
}

export default AuthRoute;
