import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import HeaderTop from './HeaderTop';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView style={style.container}>
          <HeaderTop title="Chat Screen" />
          <View style={style.wrapper}>
            <View style={style.from}>
              <Text style={style.inputTitle}>Your Name</Text>
              <TextInput
                style={style.input}
                autoCapitalize="none"
                // onChangeText={(seat) => this.setState({seat})}
                // value={this.state.seat}
                placeholder={'Your Name'}
              />
            </View>

            <TouchableOpacity style={style.btnLogin}>
              <Text style={[style.btnTextForgot, {color: 'white'}]}>Next</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

var style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: -10,
  },
  wrapper: {
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  forgotContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnLogin: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  ggBtn: {
    flexDirection: 'row',
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
  from: {
    marginBottom: 40,
    marginTop: -20,
  },
  viewButton: {flexDirection: 'row', marginLeft: '80%', marginTop: -20},
});

export default ChatScreen;
