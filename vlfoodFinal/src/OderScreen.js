import React, {Component} from 'react';
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

class OderScreen extends Component {
  state = {
    seat: '',
    listOrder: '',
  };

  constructor(props) {
    super(props);
    var seatOrder = 0;
    var listOrderFill = '';
    var item = props.route.params.item;
    this.state = {
      seat: '' + item.seat,
      listOrder: '' + item.listOrder,
      seatOrder: '' + seatOrder,
      listOrderFill: '' + listOrderFill,
    };
    this._navigateTo = this._navigateTo.bind(this);
  }

  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  onPressOrder = () => {
    const {seat, seatOrder, listOrder} = this.state;
    var seatFinal = parseInt(this.state.seat) - parseInt(this.state.seatOrder);
    if (this.state.seat === '') {
      alert('Seat Stores is blank');
      return;
    } else if (this.state.seatOrder === '') {
      alert('Seat Stores is blank');
      return;
    } else if (this.state.listOrder === '') {
      alert('Seat Stores is blank');
      return;
    } else if (parseInt(this.state.seat) < parseInt(this.state.seatOrder)) {
      alert('Seat Your Order fail');
    } else {
      var listOrderFinal = this.state.listOrder.concat(
        this.state.listOrderFill + ',',
      );
      firebase
        .database()
        .ref('Stores/' + this.props.route.params.item.key)
        .update(
          {
            seat: seatFinal,
            listOrder: listOrderFinal,
            // tach tung chu cai ra roi` update
            // listOrder: [...this.state.listOrder, this.state.listOrder + ','],
          },
          alert('Successful'),
        );
      this._navigateTo('ViewScreen');
    }
  };

  render() {
    console.log('' + this.props.route.params.seat);
    console.log('' + this.props.route.params.listOrder);
    return (
      <ScrollView>
        <SafeAreaView style={style.container}>
          <HeaderTop title="Order Form" />
          <View style={style.wrapper}>
            <View style={style.from}>
              <View>
                <Text style={style.inputTitle}>SEAT</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(seat) => this.setState({seat})}
                  value={this.state.seat}
                  placeholder={'seat'}
                />
              </View>
              <View style={{marginTop: 30}}>
                <Text style={style.inputTitle}>Seat Your Order</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(seatOrder) => this.setState({seatOrder})}
                  value={this.state.seatOrder}
                  placeholder={'seatOrder'}
                />
              </View>
              <View style={{marginTop: 30}}>
                <Text style={style.inputTitle}>Your Contact</Text>
                <TextInput
                  style={style.input}
                  autoCapitalize="none"
                  onChangeText={(listOrderFill) =>
                    this.setState({listOrderFill})
                  }
                  placeholder={'YourName : YourPhone'}
                />
              </View>
            </View>

            <TouchableOpacity
              style={style.btnLogin}
              onPress={this.onPressOrder}>
              <Text style={[style.btnTextForgot, {color: 'white'}]}>Order</Text>
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
    backgroundColor: '#fff',
    marginLeft: -10,
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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

export default OderScreen;
