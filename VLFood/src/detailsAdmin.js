import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class detailsAdmin extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>dsad</Text>
        <Text>{this.props.route.params.item.key}</Text>
      </View>
    );
  }
}

export default detailsAdmin;
