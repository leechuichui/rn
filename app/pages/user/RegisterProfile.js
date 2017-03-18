import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styleConstant from '../../style/styleConstant';  
import styleRegister from '../../style/user/styleRegisterProfile.js';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

class Register extends React.Component {
  componentDidMount() {
    //Actions.refresh({ renderRightButton: this.renderRightButton.bind(this) });
  }

  register() {
    Alert.alert(
      '性别提示',
      '性别选择注册后将不能修改，您确定所填写的信息无误吗?',
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed!')},
        {text: '确定', onPress: () => console.log('OK Pressed!')},
      ]
    )
  }

  renderRightButton() {
    
  }

  render() {
    return (
      <View style={styleRegister.container}>
        <View style={styleRegister.content}>
          <View style={styleRegister.profileWrap}>
            <Image style={styleRegister.profile} source={require('../../images/profile.png')}/>
          </View>
          <View style={styleRegister.profileform}>
            <Text style={styleRegister.profile_title}>你的昵称</Text>
            <View style={[styleConstant.inputwp,styleRegister.profile_input_wrap]}>
              <TextInput
                style={styleConstant.input}
                underlineColorAndroid="transparent"
                maxLength={11}
                />
            </View>
            <View style={[styleConstant.inputwp,styleRegister.profile_input_wrap]}>
              <TextInput
                style={styleConstant.input}
                underlineColorAndroid="transparent"
                maxLength={14}
                secureTextEntry={true}
                placeholder="密码(6-14位)"/>
            </View>
            <View style={[styleConstant.inputwp,styleRegister.profile_input_wrap]}>
              <TextInput
                style={styleConstant.input}
                underlineColorAndroid="transparent"
                maxLength={14}
                secureTextEntry={true}
                placeholder="确认密码"/>
            </View>
            <View style={styleRegister.sex_wrap}>
              <Icon.Button name="venus" style={{marginRight:30}} color="#999" backgroundColor="#fff">帅哥</Icon.Button>
              <Icon.Button name="mars" color="#999" backgroundColor="#fff">美女</Icon.Button>
            </View>
            <View style={[styleConstant.button_wrap,{marginTop:10}]}>
              <Button
                containerStyle={styleConstant.button_style}
                style={styleConstant.button}
                text="下一步"
                onPress={this.register}
              />
            </View>
          </View>
        </View>

        <View style={styleRegister.bottomContainer}></View>
      </View>
    );
  }
}

export default Register;
