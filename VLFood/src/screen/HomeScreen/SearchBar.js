import React from 'react';
import {View, Text, Image} from 'react-native';
import {Block, TextView, Input, Button} from '../../components';
import Feather from 'react-native-vector-icons/Feather';
// Component cho thanh tim kiem

const SearchBar = () => {
  return (
    <Block direction="row">
      <Button
        color="#fff"
        margin={4}
        padding={10}
        borderRadius={4}
        shadow
        middle>
        <Feather name="map-pin" size={25} />
      </Button>
      <Block margin={4} color="#fff" block shadow middle direction="row">
        <Block block>
          <Input padding={10} placeholder={'Search for meals or area'} />
        </Block>
        <Button color="#fff" padding={10} borderRadius={4} shadow middle>
          <Image
            source={require('../../assets/search.png')}
            style={{width: 30, height: 30}}
          />
        </Button>
      </Block>
    </Block>
  );
};

export default SearchBar;
