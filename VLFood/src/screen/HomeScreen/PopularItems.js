import React from 'react';
import {Block, Button, TextView} from '../../components';
import HeaderTop from './HeaderTop';
import foodapp from '../../mooks/foodapp.json';
import {FlatList, Image, Dimensions, StyleSheet} from 'react-native';
const PopularItems = () => {
  const renderItem = ({item}) => {
    return (
      <Button margin={5} padding={10} color={'#fff'}>
        <Block direction="row">
          <Image style={style.img} source={{uri: item.image}} />
          <Block paddingHorizontal={8}>
            <Block block>
              <TextView size={20}>{item.name}</TextView>
              <TextView color="#f5f4f4">By {item.location}</TextView>
            </Block>
            <Block height={1} color="#EFEEEE" />
            <TextView size={16}>{item.price}</TextView>
          </Block>
        </Block>
      </Button>
    );
  };
  return (
    <Block padding={10} marginLeft={5}>
      <HeaderTop title="Popular Items" moreTitle="View All" />
      <FlatList horizontal data={foodapp} renderItem={renderItem} />
    </Block>
  );
};

const W = Dimensions.get('window').width / 4;
const style = StyleSheet.create({
  img: {
    width: W * 2,
    height: W * 2,
    borderRadius: 8,
  },
});
export default PopularItems;
