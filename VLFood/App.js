/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screen/SplashScreen';
import HomeScreen from './src/screen/HomeScreen';
import ContactScreen from './src/screen/ContactScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Block, Button, TextView} from './src/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from './src/screen/SignUpScreen';
import HomeAdminScreen from './src/HomeAdminScreen';
import DetailStoresScreen from './src/DetailStoresScreen';
import detailsAdmin from './src/detailsAdmin';

import * as firebase from 'firebase';
import LoginScreen from './src/screen/LoginScreen';
import DetailUsersScreen from './src/DetailUsersScreen';
import ViewStoresAdminScreen from './src/ViewStoresAdminScreen';
import ViewStoresUsersScreen from './src/ViewStoresUsersScreen';
import homeAdminTest from './src/homeAdminTest';

import AddStoresScreen from './src/screen/AdminScreen/AddStoresScreen';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAXsns7te4Y_QcP28qNPm21kUz3PF3aggU',
  authDomain: 'vlfood-c71ac.firebaseapp.com',
  databaseURL: 'https://vlfood-c71ac.firebaseio.com',
  projectId: 'vlfood-c71ac',
  storageBucket: 'vlfood-c71ac.appspot.com',
  messagingSenderId: '518864796118',
  appId: '1:518864796118:web:b0f92b3ba4da12d8d2cc77',
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

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
          if (route.name == 'Home') {
            return 'explore';
          }

          if (route.name == 'Profile') {
            return 'verified-user';
          }

          if (route.name == 'ListAll') {
            return 'shopping-cart';
          }

          if (route.name == 'Contact') {
            return 'search';
          }

          if (route.name == 'HomeAdmin') {
            return 'explore';
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
                <MaterialIcons
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
      <Tab.Screen name="Home" component={HomeScreen} />
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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {/* <Stack.Screen name="MainTabUser" options={{}} component={MainTabUser} /> */}
          <Stack.Screen
            name="MainTabAdmin"
            options={{}}
            component={MainTabAdmin}
          />
          {/* Admin */}
          <Stack.Screen name="AddStoresAdmin" component={AddStoresScreen} />

          <Stack.Screen
            name="ViewStoresAdmin"
            component={ViewStoresAdminScreen}
          />
          <Stack.Screen name="DetailStores" component={DetailStoresScreen} />
          <Stack.Screen name="homeAdminTest" component={homeAdminTest} />
          <Stack.Screen name="detailsAdmin" component={detailsAdmin} />
          {/* <Stack.Screen
            name="MainTabPartner"
            options={{}}
            component={MainTabPartner}
          /> */}
          {/* User */}
          <Stack.Screen name="DetailUsers" component={DetailUsersScreen} />
          <Stack.Screen
            name="ViewStoresUsers"
            component={ViewStoresUsersScreen}
          />

          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
