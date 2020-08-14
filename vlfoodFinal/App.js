/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import * as React from 'react';

import {Block, Button, TextView} from './src/components';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeSceen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';

import HomeAdminScreen from './src/HomeAdminScreen';
import AddAdminScreen from './src/AddAdminScreen';
import EditAdminScreen from './src/EditAdminScreen';
import ViewAdminScreen from './src/ViewAdminScreen';
import ViewScreen from './src/ViewScreen';
import DetailsScreen from './src/DetailsScreen';
import ContactScreen from './src/ContactScreen';
import ProfileScreen from './src/ProfileScreen';
import SplashScreen from './src/SplashScreen';
import SignUpScreen from './src/SignUpScreen';
import todoListScreen from './src/todoListScreen';
import OderScreen from './src/OderScreen';
import ViewPartnerScreen from './src/ViewPartnerScreen';
import DetailsPartnerScreen from './src/DetailsPartnerScreen';

function CustomTab({state, descriptors, navigation}) {
  return (
    <Block
      color="#FD0014"
      direction="row"
      style={{
        paddingBottom: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
          if (route.name == 'HomeAdmin') {
            return 'house-user';
          }

          if (route.name == 'Profile') {
            return 'user-alt';
          }

          if (route.name == 'ListAll') {
            return 'shopping-cart';
          }

          if (route.name == 'Contact') {
            return 'users';
          }

          if (route.name == 'Home') {
            return 'house-user';
          }

          if (route.name == 'ViewPartner') {
            return 'list';
          }
        };
        return (
          <Button block={isFocused} onPress={onPress} onLongPress={onLongPress}>
            <Block padding={10} centered middle>
              <Block
                direction="row"
                middle
                paddingHorizontal={10}
                borderRadius={10}
                color={isFocused ? 'rgba(255,243,0,0.3)' : '#FD0014'}>
                <FontAwesome5
                  size={20}
                  name={getIcon()}
                  color={isFocused ? '#FFF' : '#222'}
                />
                {isFocused && (
                  <TextView h6 color={isFocused ? '#FFF' : '#222'}>
                    {label}
                  </TextView>
                )}
              </Block>
            </Block>
          </Button>
        );
      })}
    </Block>
  );
}

const Tab = createBottomTabNavigator();

function MainTabUser() {
  return (
    <Tab.Navigator
      tabBarOptions={{}}
      tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeSceen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainTabAdmin() {
  return (
    <Tab.Navigator
      tabBarOptions={{}}
      tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="HomeAdmin" component={HomeAdminScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function MainTabPartner() {
  return (
    <Tab.Navigator
      tabBarOptions={{}}
      tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="Home" component={HomeSceen} />
      <Tab.Screen name="ViewPartner" component={ViewPartnerScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeSceen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen
          name="MainTabAdmin"
          options={{}}
          component={MainTabAdmin}
        />
        <Stack.Screen name="HomeAdminScreen" component={HomeAdminScreen} />
        <Stack.Screen name="AddAdminScreen" component={AddAdminScreen} />
        <Stack.Screen name="EditAdminScreen" component={EditAdminScreen} />
        <Stack.Screen name="ViewAdminScreen" component={ViewAdminScreen} />
        <Stack.Screen name="todoListScreen" component={todoListScreen} />

        <Stack.Screen
          name="MainTabPartner"
          options={{}}
          component={MainTabPartner}
        />
        <Stack.Screen name="ViewPartner" component={ViewPartnerScreen} />
        <Stack.Screen
          name="DetailsPartnerScreen"
          component={DetailsPartnerScreen}
        />

        <Stack.Screen name="MainTabUser" options={{}} component={MainTabUser} />
        <Stack.Screen name="ViewScreen" component={ViewScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="OderScreen" component={OderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
