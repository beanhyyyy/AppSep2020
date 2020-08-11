import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import HeaderTop from '../../HeaderTop';

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
        <TouchableOpacity onPress={() => this._navigateTo('AddStores')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>Add Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('ViewStores')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>List Stores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('homeAdminTest')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._navigateTo('detailsAdmin')}>
          <Text style={[style.btnTextForgot, {color: 'red'}]}>
            detailsAdmin1
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 5,
  },
});
