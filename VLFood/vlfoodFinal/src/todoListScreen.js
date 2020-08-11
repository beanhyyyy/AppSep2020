import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import firestore from '../Setup';

export default class todoListScreen extends React.Component {
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
        <Text>123</Text>
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
