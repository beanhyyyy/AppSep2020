import React, {useEffect} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import SplashImage from './assets/Splash.png';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      goToLogin();
    }, 3000);
  }, []);

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return <ImageBackground style={style.bg} source={SplashImage} />;
};

const style = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
export default SplashScreen;
