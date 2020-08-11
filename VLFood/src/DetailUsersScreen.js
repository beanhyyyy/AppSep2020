import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class DetailUsersScreen extends Component {
  _Rating(item) {
    let rating = [];
    for (let i = 0; i < item; i++) {
      rating.push(
        <Image
          source={require('./assets/star.png')}
          style={{width: 15, height: 15, marginRight: 3}}
          resizeMode="cover"
        />,
      );
    }
    return rating;
  }
  render() {
    console.log(this.props);
    const rating = this.props.route.params.item.rating;

    return (
      <View style={style.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../src/assets/header_detail.png')}
          style={{flex: 1, alignItems: 'center'}}
          resizeMode={'stretch'}>
          <View style={style.image_container}>
            {/* <Image
              source={{uri: this.props.navigation.image}}
              style={style.image}
            /> */}

            {/* <Image
              source={this.props.navigation.state.params.image}
              style={style.image}
            /> */}
          </View>
          <View style={style.back}>
            <MaterialIcons
              name="search"
              color="white"
              size={35}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </ImageBackground>
        <ScrollView style={style.footer} showsVerticalScrollIndicator={false}>
          <View style={style.status}>
            <Text style={{color: 'green'}}>AVALIABLE</Text>
          </View>
          <View flexDirection={'row'}>
            <Text style={style.textPrice}>
              {this.props.route.params.item.price}
              {' | '}
            </Text>
            <Text style={style.textPrice}>
              <Text style={style.textDetail}>Seat</Text>
              {'  '}
              {this.props.route.params.item.seat}
            </Text>
          </View>

          <Text numberOfLines={2} style={style.textName}>
            {this.props.route.params.item.nameStore}
          </Text>
          <View style={style.rating}>{this._Rating(rating)}</View>
          <Text style={style.textDetail}>
            {this.props.route.params.item.location}
          </Text>
          <Text style={style.textDetail}>
            {this.props.route.params.item.description}
          </Text>
          <TouchableOpacity style={style.btnLogin}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>Order</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const height = Dimensions.get('screen').height;
const height_image = height * 0.5 * 0.5;
var style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  image_container: {
    width: height_image,
    height: height_image,
    marginTop: height_image / 3,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: height_image / 2,
  },
  back: {
    position: 'absolute',
    left: 0,
    marginTop: 30,
    marginLeft: 15,
  },
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: 'green',
  },
  textPrice: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  textName: {
    color: '#3e3c3e',
    fontWeight: 'bold',
    fontSize: 45,
  },
  textDetail: {
    color: 'gray',
    marginLeft: 5,
  },
  btnLogin: {
    marginLeft: '25%',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
    paddingVertical: 10,
    width: '60%',
    marginTop: 10,
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
});

export default DetailUsersScreen;
