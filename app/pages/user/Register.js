import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  Linking,
  View,
  Alert,
} from 'react-native';

import styleConstant from '../../style/styleConstant';  
import styleRegister from '../../style/user/styleRegister.js';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

const API_STORE = 'http://apistore.baidu.com/';
const READING_REPO = 'https://github.com/attentiveness/reading';

class Register extends React.Component {
  componentDidMount() {
    //Actions.refresh({ renderRightButton: this.renderRightButton.bind(this) });
  }

  onPress() {
    Alert.alert("1");
  }

  renderRightButton() {
    
  }

  render() {
    return (
      <View style={styleRegister.container}>
        <View style={styleRegister.content}>
          <Text style={styleRegister.reg_msg}>请确认输入您的手机号，我们将发送短信到您所提交的手机号码</Text>
          <View style={styleRegister.reg_inputwp}>
            <TextInput
              style={styleRegister.reg_input}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={11}
              placeholder="请输入手机号码"/>
          </View>
          <View style={styleConstant.button_wrap}>
            <Button
              containerStyle={styleConstant.button_style}
              style={styleConstant.button}
              text="下一步"
              onPress={Actions.registerCode}
            />
          </View>
        </View>

        <View style={styleRegister.bottomContainer}></View>
      </View>
    );
  }
}

export default Register;
