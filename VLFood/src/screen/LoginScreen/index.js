import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from './Input';
import Button from './Button';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this._navigateTo = this._navigateTo.bind(this);
  }
  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.wrapper}>
          <Text style={style.header}>Sign In</Text>
          <Input placeholder={'Email ID'} />
          <Input placeholder={'Password'} />
          <View style={style.forgotContainer}>
            <TouchableOpacity style={style.btnTextForgot}>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={style.btnLogin}
            onPress={() => this._navigateTo('MainTab')}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>SignIn</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', padding: 10}}>or</Text>
          <View style={style.ggBtn}>
            {/* <TouchableOpacity
            style={[
              style.btnLogin,
              {
                flex: 1,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'center',
                marginRight: 10,
              },
            ]}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/googleIcon.png')}
            />
            <Text style={style.btnTextForgot}>Google</Text>
          </TouchableOpacity> */}
            <Button
              title="Google"
              icon={require('../../assets/googleIcon.png')}
            />
            <Button
              title="Facebook"
              icon={require('../../assets/fbIcon.png')}
              color={'#4a6ea8'}
              textColor={'#fff'}
            />
            {/* <TouchableOpacity
            style={[
              style.btnLogin,
              {
                flex: 1,
                backgroundColor: '#4a6ea8',
                borderWidth: 1,
                borderColor: 'gray',
                flexDirection: 'row',
                justifyContent: 'center',
              },
            ]}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/fbIcon.png')}
            />
            <Text style={[style.btnTextForgot, {color: 'white'}]}>
              Facebook
            </Text>
          </TouchableOpacity> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{marginRight: 15}}>Not yet a member,</Text>
            <TouchableOpacity>
              <Text style={[style.btnTextForgot, {color: 'red'}]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btnTextForgot: {
    fontWeight: 'bold',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 10,
  },
  btnLogin: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  ggBtn: {
    flexDirection: 'row',
  },
});
