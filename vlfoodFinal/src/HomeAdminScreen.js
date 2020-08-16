import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import HeaderTop from './HeaderTop';
export default class HomeAdminScreen extends React.Component {
  constructor(props) {
    super(props);
    this._navigateTo = this._navigateTo.bind(this);
  }

  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <View style={style.container}>
        <HeaderTop title="Home Admin" />
        <View style={style.wrapper}>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => this._navigateTo('AddAdminScreen')}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>
              Add Stores
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => this._navigateTo('EditAdminScreen')}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>
              Edit Stores Admin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => this._navigateTo('ViewAdminScreen')}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>
              View Admin Screen
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={style.btnLogin} onPress={() => this._navigateTo('todoListScreen')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>todoList</Text>
        </TouchableOpacity> */}
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => this._navigateTo('ViewScreen')}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>
              ViewScreen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
  btnLogin: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
});
