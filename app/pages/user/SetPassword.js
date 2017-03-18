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
              secureTextEntry={true}
              placeholder="新密码(4-16位)"/>
          </View>
          <View style={styleRegister.reg_inputwp}>
            <TextInput
              style={styleRegister.reg_input}
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              placeholder="确认密码"/>
          </View>
          <View style={styleConstant.button_wrap}>
            <Button
              containerStyle={styleConstant.button_style}
              style={styleConstant.button}
              text="确定"
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
