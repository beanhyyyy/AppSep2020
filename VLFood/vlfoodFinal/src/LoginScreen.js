import React from 'react';
import {firebase} from '../Setup';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Button from './ButtonLogin';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this._navigateTo = this._navigateTo.bind(this);

    this.state = {
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  _handleLogin = () => {
    const {email, password} = this.state;
    if (this.state.email == 'admin@gmail.com') {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this._navigateTo('MainTabAdmin'))
        .catch((erro) => this.setState({errorMessage: erro.message}));
    } else if (this.state.email.indexOf('partner', 0)) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this._navigateTo('MainTabPartner'))
        .catch((erro) => this.setState({errorMessage: erro.message}));
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this._navigateTo('MainTabUser'))
        .catch((erro) => this.setState({errorMessage: erro.message}));
    }
  };
  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.wrapper}>
          <Text style={style.header}>Sign In</Text>
          <View style={style.errorMessage}>
            {this.state.errorMessage && (
              <Text style={style.error}>{this.state.errorMessage}</Text>
            )}
          </View>
          <View style={style.from}>
            <View>
              <Text style={style.inputTitle}>Email Address</Text>
              <TextInput
                style={style.input}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholder={'ten.mssv@vanlanguni.vn'}
              />
            </View>
            <View>
              <Text style={style.inputTitle}>Password</Text>
              <TextInput
                style={style.input}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder={'password'}
              />
            </View>
          </View>

          <View style={style.forgotContainer}>
            <TouchableOpacity style={style.btnTextForgot}>
              <Text style={style.inputTitle}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.btnLogin} onPress={this._handleLogin}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>SignIn</Text>
          </TouchableOpacity>
          <Text style={style.inputTitleOr}>or</Text>
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
            <Button title="Google" icon={require('./assets/googleIcon.png')} />
            <Button
              title="Facebook"
              icon={require('./assets/fbIcon.png')}
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
            <TouchableOpacity onPress={() => this._navigateTo('SignUp')}>
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
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
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
    marginLeft: 10,
  },
  errorMessage: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 10,
    color: '#161F3D',
    marginBottom: 10,
    padding: 10,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  inputTitleOr: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: 10,
  },
  from: {
    marginBottom: 40,
  },
});
