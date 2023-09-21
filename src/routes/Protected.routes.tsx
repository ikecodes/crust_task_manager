import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {dashboardRouteStack} from '../constants/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {primaryColor} from '../theme/colors';
import Home from '../screens/Home';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = 'home-filled';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return iconName && <Icon name={iconName} size={22} color={color} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: primaryColor.primaryBase,
        tabBarInactiveTintColor: primaryColor.primary20,
        tabBarStyle: {
          paddingBottom: 10,
          paddingHorizontal: 20,
          height: 75,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontWeight: '400',
          fontSize: 13,
        },
      })}>
      <Tab.Screen
        name={dashboardRouteStack.Dashboard}
        component={Home}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={dashboardRouteStack.Profile}
        component={Profile}
        options={{
          title: 'Profile',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

/**
 *
 * @returns Returns all the authentication routes here
 * We are adding all the auth routes here
 */
function ProtectedRoute() {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={dashboardRouteStack.Home}>
        <Stack.Screen
          name={dashboardRouteStack.Home}
          component={TabScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={dashboardRouteStack.Profile}
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
}

export default ProtectedRoute;
