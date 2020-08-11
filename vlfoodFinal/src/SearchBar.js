import React from 'react';
import {Image} from 'react-native';
import {Block, Input, Button} from './components';
// Component cho thanh tim kiem
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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
        <FontAwesome5 name="map-marker-alt" size={25} />
      </Button>
      <Block margin={4} color="#fff" block shadow middle direction="row">
        <Block block>
          <Input padding={10} placeholder={'Search for meals or area'} />
        </Block>
        <Button color="#fff" padding={10} borderRadius={4} shadow middle>
          <FontAwesome5 name="search" size={25} />
        </Button>
      </Block>
    </Block>
  );
};

export default SearchBar;
