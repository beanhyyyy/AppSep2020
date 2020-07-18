import React from 'react';
import {Block, TextView, Input, Button} from '../../components';
import HeaderTop from './HeaderTop';
import {FlatList} from 'react-native-gesture-handler';
import categories from '../../mooks/categories.json';
import {Image, Dimensions, StyleSheet} from 'react-native';

const TopCategories = () => {
  const renderItem = ({item}) => {
    return (
      <Button padding={5}>
        <Image style={style.img} source={{uri: item.image}} />
        <TextView padding={8} center>
          {item.name}
        </TextView>
      </Button>
    );
  };
  return (
    <Block padding={10}>
      <HeaderTop moreIcon="filter" title="Top Categories" moreTitle="Filter" />
      <FlatList
        horizontal
        keyExtractor={(item) => item.id}
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Block>
  );
};

const W = Dimensions.get('window').width / 4;
const style = StyleSheet.create({
  img: {
    width: W,
    height: (W * 9) / 16,
    borderRadius: 8,
  },
});
export default TopCategories;
