import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HeaderTop from './HeaderTop';
import {firebase} from '../Setup';

export default class AddAdminScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storesTable: [],
      nameStore: '',
      location: '',
      image: '',
      seat: '',
      description: '',
      rating: '',
      price: '',
      listOrder: [],
      loading: false,
    };
    this._navigateTo = this._navigateTo.bind(this);
  }
  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  componentDidMount() {}

  onPressAdd = () => {
    const {nameStore, image, location, description, rating, price} = this.state;
    if (this.state.nameStore === '') {
      alert('Name Stores is blank');
      return;
    } else if (this.state.location === '') {
      alert('Location Stores is blank');
      return;
    } else if (this.state.image === '') {
      alert('Image Stores is blank');
      return;
    } else if (this.state.seat === '') {
      alert('Seat Stores is blank');
      return;
    } else if (this.state.description === '') {
      alert('Description Stores is blank');
      return;
    } else if (this.state.rating === '') {
      alert('Rating Stores is blank');
      return;
    } else if (this.state.price === '') {
      alert('Price Stores is blank');
      return;
    } else {
      firebase
        .database()
        .ref('Stores')
        .push(
          {
            nameStore: this.state.nameStore,
            location: this.state.location,
            image: this.state.image,
            seat: parseInt(this.state.seat) | 0,
            description: this.state.description,
            rating: parseInt(this.state.rating) | 0,
            price: this.state.price,
            listOrder: this.state.listOrder,
          },
          alert('Successful'),
        );
      this._navigateTo('ViewAdminScreen');
    }
  };
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={style.container}>
          <HeaderTop title="Add Stores" />
          <View style={style.wrapper}>
            <View style={style.from}>
              <View>
                <Text style={style.inputTitle}>Name Stores</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(nameStore) => this.setState({nameStore})}
                  value={this.state.nameStore}
                  placeholder={'your name store'}
                />
              </View>

              <View style={{marginTop: 30}}>
                <Text style={style.inputTitle}>Location</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(location) => this.setState({location})}
                  value={this.state.location}
                  placeholder={'location'}
                />
              </View>

              <View style={{marginTop: 30}}>
                <Text style={style.inputTitle}>Image Link</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(image) => this.setState({image})}
                  value={this.state.image}
                  placeholder={'link'}
                />
              </View>

              <View style={{marginTop: 30}}>
                <Text style={style.inputTitle}>Description</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(description) => this.setState({description})}
                  value={this.state.description}
                  placeholder={'description'}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginTop: 30}}>
                  <Text style={style.inputTitle}>Rating</Text>
                  <TextInput
                    style={style.input}
                    autoCapitalize="none"
                    onChangeText={(rating) => this.setState({rating})}
                    value={this.state.rating}
                    placeholder={'...'}
                  />
                </View>
                <View style={{marginTop: 30}}>
                  <Text style={style.inputTitle}>Price</Text>
                  <TextInput
                    style={style.input}
                    autoCapitalize="none"
                    onChangeText={(price) => this.setState({price})}
                    value={this.state.price}
                    placeholder={'$~$'}
                  />
                </View>
                <View style={{marginTop: 30}}>
                  <Text style={style.inputTitle}>Seat</Text>
                  <TextInput
                    style={style.input}
                    autoCapitalize="none"
                    onChangeText={(seat) => this.setState({seat})}
                    value={this.state.seat}
                    placeholder={'seat'}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity style={style.btnLogin} onPress={this.onPressAdd}>
              <Text style={[style.btnTextForgot, {color: 'white'}]}>Add</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  btnLogin: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  ggBtn: {
    flexDirection: 'row',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 10,
    color: '#161F3D',
    marginBottom: 10,
    padding: 10,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  inputTitleOr: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
  from: {
    marginBottom: 40,
    marginTop: -20,
  },
});
// import React from 'react';
// import {SafeAreaView} from 'react-native';
// import {Block, Button, TextView} from './components';
// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   View,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {firebase} from '../Setup';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const rootRef = firebase.database().ref();
// const storesRef = rootRef.child('storesTable');
// export default class ViewAdminScreen extends React.Component {
//   state = {
//     storesTable: [],
//     nameStore: '',
//     location: '',
//     seat: '',
//     description: '',
//     rating: '',
//     price: '',
//     catagory: '',
//     loading: false,
//   };
//   _navigateTo = this._navigateTo.bind(this);

//   componentDidMount() {
//     storesRef.on('value', (childSnapshot) => {
//       const storesTable = [];
//       childSnapshot.forEach((doc) => {
//         storesTable.push({
//           key: doc.key,
//           nameStore: doc.toJSON().nameStore,
//           location: doc.toJSON().location,
//           seat: doc.toJSON().seat,
//           description: doc.toJSON().description,
//           rating: doc.toJSON().rating,
//           price: doc.toJSON().price,
//         });
//         this.setState({
//           storesTable: storesTable,
//           data_temp: storesTable,
//           loading: true,
//         });
//       });
//     });
//   }

//   _navigateTo(pageName) {
//     this.props.navigation.navigate(pageName);
//   }

//   _Rating(item) {
//     let rating = [];
//     for (let i = 0; i < item; i++) {
//       rating.push(
//         <Image
//           source={require('./assets/star.png')}
//           style={{width: 15, height: 15, marginRight: 3}}
//           resizeMode="cover"
//         />,
//       );
//     }
//     return rating;
//   }
//   renderItem = ({item}) => {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <Block block color="white">
//           <LinearGradient
//             paddingBottom={5}
//             colors={['#e1dedd', 'white']}
//             start={{x: 0, y: 1}}
//             end={{x: 1, y: 0}}
//             style={style.item}>
//             {/* <View style={style.image_container}>
//                   <Image source={{uri: item.image}} style={style.image} />
//                 </View> */}
//             <View style={style.content}>
//               <TextView style={style.styleName}>{item.nameStore}</TextView>
//               <TextView color="gray">By {item.location}</TextView>
//               <TextView color="gray">{item.seat}</TextView>
//               <TextView color="gray">{item.description}</TextView>
//               <View style={style.rating}>{this._Rating(item.rating)}</View>
//               <View style={style.price_container}>
//                 <View style={style.price}>
//                   <TextView style={style.textPrice}>{item.price}</TextView>
//                 </View>
//               </View>
//             </View>

//             <Button
//               style={style.button}
//               onPress={() =>
//                 this.props.navigation.navigate('DetailStores', {
//                   item: item,
//                 })
//               }
//               // onPress={() =>
//               //   this._navigateTo('Detail', {
//               //     nameStore: item.nameStore,
//               //     location: item.location,
//               //     seat: item.seat,
//               //     description: item.description,
//               //     price: item.price,
//               //   })
//               // }
//             >
//               <FontAwesome5 name="arrowright" color="white" size={20} />
//             </Button>
//           </LinearGradient>
//         </Block>
//       </SafeAreaView>
//     );
//   };

//   ItemSeparatorComponent = () => {
//     return <View style={{height: 10}} />;
//   };

//   _search(text) {
//     let storesTable = [];
//     this.state.data_temp.map(function (value) {
//       if (value.nameStore.indexOf(text) > -1) {
//         storesTable.push(value);
//       }
//     });
//     this.setState({
//       storesTable: storesTable,
//       search: text,
//     });
//   }
//   render() {
//     return (
//       <View style={style.container}>
//         <View style={style.section}>
//           <TextInput
//             placeholder="Search.."
//             style={{flex: 1, marginLeft: 10}}
//             value={this.state.search}
//             onChangeText={(text) => this._search(text)}
//           />
//           <TouchableOpacity
//             onPress={() => this._search('')}
//             style={{paddingHorizontal: 10}}>
//             <FontAwesome5 name="close" color="gray" size={25} />
//           </TouchableOpacity>
//         </View>
//         <View style={style.flastList}>
//           <FlatList
//             data={this.state.storesTable}
//             renderItem={this.renderItem}
//             keyExtractor={(item, index) => item.key}
//             ItemSeparatorComponent={this.ItemSeparatorComponent}
//             showsVerticalScrollIndicator={true}
//             removeClippedSubviews
//             initialNumToRender={1}
//             maxToRenderPerBatch={1}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   flastList: {
//     flex: 1,
//     marginTop: 10,
//   },
//   item: {
//     flex: 1,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     borderRadius: 10,
//   },
//   image_container: {
//     width: 90,
//     height: 90,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderWidth: 5,
//     borderColor: 'white',
//     borderRadius: 10,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//   },
//   styleName: {
//     color: 'gray',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   rating: {
//     marginTop: 5,
//     flexDirection: 'row',
//   },
//   button: {
//     width: 30,
//     height: 30,
//     backgroundColor: '#e1dedd',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   price_container: {
//     flexDirection: 'row',
//     margin: 10,
//   },
//   price: {
//     backgroundColor: 'white',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 50,
//   },
//   textPrice: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 100,
//     backgroundColor: '#f2f2f2',
//     marginTop: 5,
//   },
// });

// import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// export default class AddAdminScreen extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={style.container}>
//         <Text>123</Text>
//         <TouchableOpacity
//           onPress={() => this.props.navigation.navigate('Login')}>
//           <Text>Login</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingVertical: 20,
//     backgroundColor: '#fff',
//   },
// });
