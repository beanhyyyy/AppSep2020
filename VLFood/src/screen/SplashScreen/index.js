import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import SplashImage from '../../assets/Splash.png';

const Splash = () => {
  return <ImageBackground style={style.bg} source={SplashImage} />;
};

const style = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
export default Splash;
