/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../src/screen/LoginScreen';
import Splash from '../src/screen/SplashScreen';
import HomeScreen from '../src/screen/HomeScreen';
import ListAllScreen from '../src/screen/ListAllScreen';
import ContactScreen from './screen/ContactScreen';
import ProfileScreen from '../src/screen/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Block, Button, TextView} from '../src/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScreen from '../src/screen/DetailScreen';
import SignUpScreen from './screen/SignUpScreen';
import HomeAdminScreen from './screen/AdminScreen/HomeAdminScreen';
import AddStoresScreen from './screen/AdminScreen/AddStoresScreen';
import DetailStoresScreen from './screen/AdminScreen/DetailStoresScreen';
import ViewStoresScreen from './screen/AdminScreen/ViewStoresScreen';
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
      <Tab.Screen name="ListAll" component={ListAllScreen} />
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
      <Tab.Screen name="ListAll" component={ListAllScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} headerMode="none">
        <Stack.Screen name="MainTabUser" options={{}} component={MainTabUser} />
        <Stack.Screen
          name="MainTabAdmin"
          options={{}}
          component={MainTabAdmin}
        />
        <Tab.Screen name="AddStores" component={AddStoresScreen} />
        <Tab.Screen name="DetailStores" component={DetailStoresScreen} />
        <Tab.Screen name="ViewStores" component={ViewStoresScreen} />

        <Stack.Screen
          name="MainTabPartner"
          options={{}}
          component={MainTabPartner}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
