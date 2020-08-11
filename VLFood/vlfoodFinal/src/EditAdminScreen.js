import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
import HeaderTop from './HeaderTop';
import {firebase} from '../Setup';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class EditAdminScreen extends Component {
  state = {
    nameStore: '',
    location: '',
    seat: '',
    description: '',
    rating: '',
    price: '',
    catagory: '',
  };
  constructor(props) {
    super(props);

    var item = props.route.params.item;
    this.state = {
      nameStore: '' + item.nameStore,
      location: '' + item.location,
      seat: '' + item.seat,
      description: '' + item.description,
      rating: '' + item.rating,
      price: '' + item.price,
      catagory: '' + item.catagory,
    };
    this._navigateTo = this._navigateTo.bind(this);
  }
  onPressRemove = () => {
    Alert.alert(
      'Confirm Dialog',
      'Are you sure to remove ' + this.state.nameStore + ' ?',
      [{text: 'Yes'}, {text: 'NO'}],
    );
    if (true) {
      firebase
        .database()
        .ref('Stores/' + this.props.route.params.item.key)
        .remove(),
        Alert.alert('successfull'),
        this._navigateTo('ViewAdminScreen');
    }
  };
  onPressEdit = () => {
    const {nameStore, location, description, rating, price} = this.state;
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
    } else {
      firebase
        .database()
        .ref('Stores/' + this.props.route.params.item.key)
        .update(
          {
            nameStore: this.state.nameStore,
            location: this.state.location,
            seat: parseInt(this.state.seat) | 0,
            description: this.state.description,
            rating: parseInt(this.state.rating) | 0,
            price: this.state.price,
          },
          alert('Successful'),
        );
      this._navigateTo('ViewAdminScreen');
    }
  };

  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={style.container}>
          <HeaderTop title="Edit Stores" />
          <View style={style.viewButton}>
            <TouchableOpacity style={style.button} onPress={this.onPressRemove}>
              <FontAwesome5 name="trash" color="gray" size={20} />
            </TouchableOpacity>
          </View>

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
                    value={this.state.rating.toString()}
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
                    value={this.state.seat.toString()}
                    placeholder={'seat'}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity style={style.btnLogin} onPress={this.onPressEdit}>
              <Text style={[style.btnTextForgot, {color: 'white'}]}>Edit</Text>
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
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#e1dedd',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  viewButton: {flexDirection: 'row', marginLeft: '80%', marginTop: -20},
});

export default EditAdminScreen;
