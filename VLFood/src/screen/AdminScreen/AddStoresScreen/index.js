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
import HeaderTop from '../../HeaderTop';
import * as firebase from 'firebase';

// {
//   "id": "4",
//   "name": "Food 4",
//   "price": "12$",
//   "location": "Viet Nam",
//   "rating": "4",
//   "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
// },

const rootRef = firebase.database().ref();
const storesRef = rootRef.child('storesTable');
var firebaseConfig = {
  apiKey: 'AIzaSyAK2vpbOj6Gr1d40E2GT_ZzoraozESBEwE',
  authDomain: 'vlfood-47ab6.firebaseapp.com',
  databaseURL: 'https://vlfood-47ab6.firebaseio.com',
  projectId: 'vlfood-47ab6',
  storageBucket: 'vlfood-47ab6.appspot.com',
  messagingSenderId: '782169738099',
  appId: '1:782169738099:web:fca7305f583cb391919306',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default class AddStoresScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
    this._navigateTo = this._navigateTo.bind(this);
  }
  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  componentDidMount() {}

  onPressAdd = () => {
    const {
      nameStore,
      location,
      description,
      rating,
      price,
      catagory,
    } = this.state;
    if (this.state.nameStore === '') {
      alert('Name Stores is blank');
      return;
    } else if (this.state.location === '') {
      alert('Location Stores is blank');
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
    } else if (this.state.catagory === '') {
      alert('Catagory Stores is blank');
      return;
    } else {
      storesRef.push(
        {
          nameStore: this.state.nameStore,
          location: this.state.location,
          seat: this.state.seat,
          description: this.state.description,
          rating: this.state.rating,
          price: this.state.price,
          catagory: this.state.catagory,
        },
        alert('Successful'),
      );
      this._navigateTo('ViewStores');
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
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
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
                <View style={{marginTop: 30, marginRight: 100}}>
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
                  <Text style={style.inputTitle}>Catagory</Text>
                  <TextInput
                    style={style.input}
                    autoCapitalize="none"
                    onChangeText={(catagory) => this.setState({catagory})}
                    value={this.state.catagory}
                    placeholder={'1:Food, 2:Drink'}
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
// import {View, StyleSheet} from 'react-native';
// import HeaderTop from '../../HeaderTop';
// export default class AddStoresScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this._navigateTo = this._navigateTo.bind(this);
//   }
//   _navigateTo(pageName) {
//     this.props.navigation.navigate(pageName);
//   }

//   render() {
//     return (
//       <View style={style.container}>
//         <HeaderTop title="Detail Stores" />
//       </View>
//     );
//   }
// }

// var style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     marginTop: 20,
//     marginBottom: 5,
//   },
// });
