import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {firebase, auth} from '../Setup';

export default class ProfileScreen extends React.Component {
  state = {
    email: '',
    displayName: '',
  };
  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser;
    this.setState({email, displayName});
    this._navigateTo = this._navigateTo.bind(this);
  }
  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }
  signOutUser = () => {
    firebase.auth().signOut();
    this._navigateTo('Login');
  };

  render() {
    return (
      <View style={style.container}>
        <Text>Hi {this.state.email}!</Text>
        <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
