import React from 'react';
import {SafeAreaView} from 'react-native';
import {Block, Button, TextView} from './components';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {firebase} from '../Setup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class ViewScreen extends React.Component {
  state = {
    storesTable: [],
    nameStore: '',
    location: '',
    seat: '',
    description: '',
    rating: '',
    price: '',
    catagory: '',
    loading: false,
  };
  _navigateTo = this._navigateTo.bind(this);

  componentDidMount() {
    firebase
      .database()
      .ref()
      .child('Stores')
      .on('value', (childSnapshot) => {
        const storesTable = [];
        childSnapshot.forEach((doc) => {
          storesTable.push({
            key: doc.key,
            nameStore: doc.toJSON().nameStore,
            location: doc.toJSON().location,
            seat: doc.toJSON().seat,
            description: doc.toJSON().description,
            rating: doc.toJSON().rating,
            price: doc.toJSON().price,
          });
          this.setState({
            storesTable: storesTable,
            data_temp: storesTable,
            loading: true,
          });
        });
      });
  }

  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

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
  renderItem = ({item}) => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Block block color="white">
          <LinearGradient
            paddingBottom={5}
            colors={['#e1dedd', 'white']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={style.item}>
            {/* <View style={style.image_container}>
                  <Image source={{uri: item.image}} style={style.image} />
                </View> */}
            <View style={style.content}>
              <TextView style={style.styleName}>{item.nameStore}</TextView>
              <TextView color="gray">By {item.location}</TextView>
              <TextView color="gray">{item.seat}</TextView>
              <TextView color="gray">{item.description}</TextView>
              <View style={style.rating}>{this._Rating(item.rating)}</View>
              <View style={style.price_container}>
                <View style={style.price}>
                  <TextView style={style.textPrice}>{item.price}</TextView>
                </View>
              </View>
            </View>

            <Button
              style={style.button}
              onPress={() =>
                this.props.navigation.navigate('DetailsScreen', {
                  item: item,
                })
              }
              // onPress={() =>
              //   this._navigateTo('Detail', {
              //     nameStore: item.nameStore,
              //     location: item.location,
              //     seat: item.seat,
              //     description: item.description,
              //     price: item.price,
              //   })
              // }
            >
              <FontAwesome5 name="chevron-right" color="white" size={20} />
            </Button>
          </LinearGradient>
        </Block>
      </SafeAreaView>
    );
  };

  ItemSeparatorComponent = () => {
    return <View style={{height: 10}} />;
  };

  _search(text) {
    let storesTable = [];
    this.state.data_temp.map(function (value) {
      if (value.nameStore.indexOf(text) > -1) {
        storesTable.push(value);
      }
    });
    this.setState({
      storesTable: storesTable,
      search: text,
    });
  }
  render() {
    return (
      <View style={style.container}>
        <View style={style.section}>
          <TextInput
            placeholder="Search.."
            style={{flex: 1, marginLeft: 10}}
            value={this.state.search}
            onChangeText={(text) => this._search(text)}
          />
          <TouchableOpacity
            onPress={() => this._search('')}
            style={{paddingHorizontal: 10}}>
            <FontAwesome5 name="search" color="gray" size={25} />
          </TouchableOpacity>
        </View>
        <View style={style.flastList}>
          <FlatList
            data={this.state.storesTable}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.ItemSeparatorComponent}
            showsVerticalScrollIndicator={true}
            removeClippedSubviews
            initialNumToRender={1}
            maxToRenderPerBatch={1}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flastList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  image_container: {
    width: 90,
    height: 90,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  styleName: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#e1dedd',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flexDirection: 'row',
    margin: 10,
  },
  price: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textPrice: {
    color: 'red',
    fontWeight: 'bold',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#f2f2f2',
    marginTop: 5,
  },
});
