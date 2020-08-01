import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as firebase from 'firebase';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this._navigateTo = this._navigateTo.bind(this);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      errorMessage: null,
    };
  }

  _navigateTo(pageName) {
    this.props.navigation.navigate(pageName);
  }

  _handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredentials) => {
        return (
          userCredentials.user.updateProfile({
            displayName: this.state.displayName,
          }),
          alert('successfull'),
          this._navigateTo('Login')
        );
      })
      .catch((error) => this.setState({errorMessage: error.message}));
  };
  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.wrapper}>
          <Text style={style.header}>Sign Up</Text>
          <View style={style.errorMessage}>
            {this.state.errorMessage && (
              <Text style={style.error}>{this.state.errorMessage}</Text>
            )}
          </View>
          <View style={style.from}>
            <View>
              <Text style={style.inputTitle}>Name</Text>
              <TextInput
                style={style.input}
                autoCapitalize="none"
                onChangeText={(displayName) => this.setState({displayName})}
                value={this.state.displayName}
                placeholder={'your name'}
              />
            </View>
            <View style={{marginTop: 30}}>
              <Text style={style.inputTitle}>Email Address</Text>
              <TextInput
                style={style.input}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholder={'ten.mssv@vanlanguni.vn'}
              />
            </View>
            <View style={{marginTop: 30}}>
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

          <TouchableOpacity style={style.btnLogin} onPress={this._handleSignUp}>
            <Text style={[style.btnTextForgot, {color: 'white'}]}>SignUp</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{marginRight: 15}}>You are a member,</Text>
            <TouchableOpacity onPress={() => this._navigateTo('Login')}>
              <Text style={[style.btnTextForgot, {color: 'red'}]}>Sign In</Text>
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
