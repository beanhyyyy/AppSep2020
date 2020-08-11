import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import HeaderTop from './HeaderTop';
import admin from './mooks/admin';

export default class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: admin,
    };
    this._navigateTo = this._navigateTo.bind(this);
  }
  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  _Rating(item) {
    let rating = [];
    for (let i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('./assets/star2.png')}
          style={{width: 15, height: 15, marginRight: 3}}
          resizeMode="cover"
        />,
      );
    }
    return rating;
  }

  ItemSeparatorComponent = () => {
    return <View style={{height: 30}} />;
  };

  renderItem = ({item}) => {
    return (
      <View style={style.item}>
        <Image source={{uri: item.image}} style={style.image} />
        <Text numberOfLines={1} style={style.name}>
          {item.name}
        </Text>
        <View style={{flexDirection: 'row'}}>{this._Rating(item.rating)}</View>
        <Text numberOfLines={2} style={style.comment}>
          "{item.comment}"
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={style.container}>
        <HeaderTop title="ContactScreen" />
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={false}
            numColumns={3}
          />
        </View>
      </View>
    );
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: -8,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'red',
  },
  name: {
    color: 'gray',
    fontWeight: 'bold',
  },
  comment: {
    fontStyle: 'italic',
    marginTop: 5,
  },
});
