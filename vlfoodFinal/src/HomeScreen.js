import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Block, TextView, Button} from '../src/components';
import SearchBar from './SearchBar';
import PopularItems from './PopularItems';
import TopCategories from './TopCategories';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <Block block color="#f5f4f4" padding={10}>
          <SearchBar />
          <Block height={5} color="#EFEEEE" margin={10} />
          <Block direction="row" justifyContent="space-between">
            <TextView bold h6>
              {'Top Categories'}
            </TextView>
            <Button>
              <Block direction="row" middle>
                <FontAwesome5 size={18} color="#ADABAC" name={'filter'} />
                <TextView color="#ADABAC">
                  {'   '}
                  {'Top Categories'}
                </TextView>
              </Block>
            </Button>
          </Block>
          <TopCategories />
          <Block height={5} color="#EFEEEE" margin={10} />
          <Block direction="row" justifyContent="space-between">
            <TextView bold h6>
              {'Popular'}
            </TextView>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ViewScreen')}>
              <Block direction="row" middle>
                <FontAwesome5 size={18} color="#ADABAC" name={'filter'} />
                <TextView color="#ADABAC">
                  {'   '}
                  {'Views All'}
                </TextView>
              </Block>
            </TouchableOpacity>
          </Block>
          <PopularItems />
          <Block height={1} color="#EFEEEE" />
        </Block>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
