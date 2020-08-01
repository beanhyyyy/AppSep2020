import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderTop from '../../HeaderTop';
export default class ViewStoresScreen extends React.Component {
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
        <HeaderTop title="View Stores" />
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
