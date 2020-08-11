import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class homeAdminTest extends Component {
  render() {
    return (
      <View>
        <Text>dsad</Text>
        <Button
          title="go"
          onPress={() =>
            this.props.navigation.navigate('detailsAdmin', {
              screenName: 'My details screen',
            })
          }
        />
      </View>
    );
  }
}

export default homeAdminTest;
