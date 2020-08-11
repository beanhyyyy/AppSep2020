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
        <TouchableOpacity onPress={() => this._navigateTo('AddAdminScreen')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>Add Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('EditAdminScreen')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>
            Edit Stores Admin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('ViewAdminScreen')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>
            View Admin Screen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('todoListScreen')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>todoList</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('ViewScreen')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>ViewScreen</Text>
        </TouchableOpacity>
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
});
