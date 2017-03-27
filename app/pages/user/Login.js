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
import ThirdLogin from '../../components/ThirdLogin';

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
          <View style={styleRegister.reg_inputwp}>
            <TextInput
              style={styleRegister.reg_input}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={11}
              placeholder="手机号"/>
          </View>
          <View style={styleRegister.reg_inputwp}>
            <TextInput
              style={styleRegister.reg_input}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              placeholder="密码"/>
          </View>
          <View style={styleConstant.button_wrap}>
            <Button
              containerStyle={styleConstant.button_style}
              style={styleConstant.button}
              text="登录"
              onPress={Actions.tabbar}
            />
          </View>
          <View style={styleRegister.forgetwrap}>
            <Button
              containerStyle={styleRegister.forgetbtn}
              text="忘记密码"
              onPress={Actions.setPassword}
            />
          </View>
        </View>
        <ThirdLogin></ThirdLogin>
      </View>
    );
  }
}

export default Register;
