import React from 'react';
import {firebase} from '../Setup';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

// import {GoogleSignin} from '@react-native-community/google-signin';

// GoogleSignin.configure({
//   webClientId:
//     '400214112291-t0u484fg2nptcksojdscju0ui3f6q5il.apps.googleusercontent.com',
// });

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

  // onGoogleButtonPress = async () => {
  //   // Get the users ID token
  //   await GoogleSignin.hasPlayServices();
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = firebase.auth.GoogleAuthProvider.credential(
  //     idToken,
  //   );

  //   // Sign-in the user with the credential
  //   return firebase.auth.signInWithCredential(googleCredential);
  // };

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
    } else if (this.state.email.toString().indexOf('partner', 0) == 0) {
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
    console.log(this.state.email.toString().indexOf('partner', 0));
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
            <TouchableOpacity
              // onPress={() =>
              //   this.onGoogleButtonPress().then(() =>
              //     console.log('Signed in with Google!'),
              //   )
              // }
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
                source={require('./assets/googleIcon.png')}
              />
              <Text style={style.btnTextForgot}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() =>
              //   this.onFacebookButtonPress().then(() =>
              //     console.log('Signed in with Facebook!'),
              //   )
              // }
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
                source={require('./assets/fbIcon.png')}
              />
              <Text style={[style.btnTextForgot, {color: 'white'}]}>
                Facebook
              </Text>
            </TouchableOpacity>
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
