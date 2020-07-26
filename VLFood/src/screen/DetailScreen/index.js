import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={style.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require('../../assets/header_detail.png')}
          style={{flex: 1, alignItems: 'center'}}
          resizeMode={'stretch'}>
          <View style={style.image_container}>
            <Image
              source={{uri: this.props.navigation.image}}
              style={style.image}
            />

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
            <Text style={{color: 'red'}}>AVALIABLE</Text>
          </View>
          <Text style={style.textPrice}>{this.props.navigation.price}</Text>
          <Text numberOfLines={2} style={style.textName}>
            {this.props.navigation.price}
          </Text>
          <Text style={style.textDetail}>dddddddddddddddddddddddd</Text>
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
    borderColor: 'red',
  },
  textPrice: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  textName: {
    color: '#3e3c3e',
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 35,
  },
  textDetail: {
    color: 'gray',
    marginTop: 10,
    marginBottom: 10,
  },
  btnTextForgot: {
    fontWeight: 'bold',
  },
  btnLogin: {
    marginLeft: '25%',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
    paddingVertical: 10,
    width: '60%',
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
