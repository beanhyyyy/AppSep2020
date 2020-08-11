import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Button = ({color, textColor, icon, title}) => {
  return (
    <TouchableOpacity
      style={[
        style.btnLogin,
        {
          flex: 1,
          backgroundColor: color,
          borderWidth: !color ? 1 : 0,
          borderColor: 'gray',
          flexDirection: 'row',
          justifyContent: 'center',
          marginRight: 10,
        },
      ]}>
      <Image style={{width: 20, height: 20}} source={icon} />
      <Text style={[style.btnTextForgot, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  btnLogin: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  ggBtn: {
    flexDirection: 'row',
  },
  btnTextForgot: {
    fontWeight: 'bold',
  },
});

export default Button;
