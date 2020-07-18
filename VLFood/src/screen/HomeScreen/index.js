import React from 'react';
import {SafeAreaView} from 'react-native';
import {Block} from '../../components';
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItems from './PopularItems';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Block block color="#f5f4f4" padding={10}>
        <SearchBar />
        <Block height={1} color="#EFEEEE" />
        <TopCategories />
        <Block height={1} color="#EFEEEE" />
        <PopularItems />
        <Block height={1} color="#EFEEEE" />
      </Block>
    </SafeAreaView>
  );
};

export default HomeScreen;
