import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';

import styleConstant from '../../style/styleConstant';  
import styleRegister from '../../style/user/styleRegister.js';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

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
          <Text style={styleRegister.reg_msg}>我们已经发送了短信验证码到这个手机</Text>
          <Text style={styleRegister.reg_msg}>18508226326</Text>
          <View style={styleRegister.reg_inputwp}>
            <TextInput
              style={styleRegister.reg_input}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
              maxLength={6}
              placeholder="验证码"/>
          </View>
          <View style={styleConstant.button_wrap}>
            <Button
              containerStyle={styleConstant.button_style}
              style={styleConstant.button}
              text="下一步"
              onPress={Actions.registerProfile}
            />
          </View>
        </View>

        <View style={styleRegister.bottomContainer}></View>
      </View>
    );
  }
}

export default Register;
