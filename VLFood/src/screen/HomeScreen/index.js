import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Block, TextView, Button} from '../../components';
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItems from './PopularItems';
import Feather from 'react-native-vector-icons/Feather';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this._navigateTo = this._navigateTo.bind(this);
  }
  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Block block color="#f5f4f4" padding={10}>
          <SearchBar />
          <Block height={1} color="#EFEEEE" />
          <Block direction="row" justifyContent="space-between">
            <TextView bold h6>
              {'Top Categories'}
            </TextView>
            <Button>
              <Block direction="row" middle>
                <Feather size={18} color="#ADABAC" name={'filter'} />
                <TextView color="#ADABAC">
                  {'   '}
                  {'Top Categories'}
                </TextView>
              </Block>
            </Button>
          </Block>
          <TopCategories />
          <Block height={1} color="#EFEEEE" />
          <Block height={1} color="#EFEEEE" />
          <Block direction="row" justifyContent="space-between">
            <TextView bold h6>
              {'Popular'}
            </TextView>
            <Button onPress={() => this._navigateTo('ListAll')}>
              <Block direction="row" middle>
                <Feather size={18} color="#ADABAC" name={'filter'} />
                <TextView color="#ADABAC">
                  {'   '}
                  {'Views All'}
                </TextView>
              </Block>
            </Button>
          </Block>
          <PopularItems />
          <Block height={1} color="#EFEEEE" />
        </Block>
      </SafeAreaView>
    );
  }
}
