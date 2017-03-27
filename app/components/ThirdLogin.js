/**
 * 第三方登录
 * Created by guowei on 2017/3/27.
 */

import style from '../style/components/styleThirdLogin';
import React, { PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: Text.propTypes.style,
  containerStyle: View.propTypes.style,
  text: PropTypes.string,
  activeOpacity: PropTypes.number
};

/**
 * QQ登录
 */
function qqLogin() {
  alert('1');
}

const ThirdLogin = () => (
  <View style={style.container}>
    <View style={style.titleWrap}>
      <View style={style.divideLine}></View>
      <Text style={style.title}>第三方账号快速登录</Text>
      <View style={style.divideLine}></View>
    </View>
    <View style={style.loginContent}>
      <TouchableOpacity
        style={style.loginItem}
        onPress={qqLogin}
      >
        <Image source={require('../images/qq_login.png')} style={style.loginIcon}></Image>
        <Text style={style.loginText}>QQ</Text>
      </TouchableOpacity>
    </View>
  </View>
);




export default ThirdLogin;
