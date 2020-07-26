import React from 'react';
import {SafeAreaView} from 'react-native';
import {Block} from '../../components';
import HeaderTop from './HeaderTop';
import ListAllItemScreen from '../../screen/ListAllItemScreen';

const ListAllScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Block block color="#f5f4f4" padding={10}>
        <HeaderTop title="ListAll" />
        <Block height={1} color="#EFEEEE" />
        <ListAllItemScreen />
        <Block height={1} color="#EFEEEE" />
      </Block>
    </SafeAreaView>
  );
};

export default ListAllScreen;
