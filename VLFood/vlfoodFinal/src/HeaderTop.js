import React from 'react';
import {Block, TextView} from '../src/components';
import {Dimensions, StyleSheet, ImageBackground} from 'react-native';

const HeaderTop = ({title}) => {
  return (
    <Block>
      <ImageBackground
        source={require('./assets/header.png')}
        style={style.img}
        resizeMode="contain">
        <TextView style={style.styleTitle}>{title}</TextView>
      </ImageBackground>
    </Block>
  );
};

const W = Dimensions.get('window').width;
const style = StyleSheet.create({
  img: {
    width: W * 0.4,
    height: W * 0.3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 5,
  },
  styleTitle: {
    color: 'white',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default HeaderTop;
