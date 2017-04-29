import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Linking,
  View,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import style from '../style/styleHome';
import styleConstant from '../style/styleConstant';

import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';


class Register extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  onPress() {
    //Alert.alert("1");
  }


  render() {
    return (
      <View style={style.container}>
        <View style={style.imageWrap}>
          <Image source={require('../images/ic_welcome_photo_1.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_2.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_3.png')} style={style.image} ></Image>

          <Image source={require('../images/ic_welcome_photo_4.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_5.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_6.png')} style={style.image} ></Image>

          <Image source={require('../images/ic_welcome_photo_7.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_8.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_9.png')} style={style.image} ></Image>

          <Image source={require('../images/ic_welcome_photo_10.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_11.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_12.png')} style={style.image} ></Image>

          <Image source={require('../images/ic_welcome_photo_13.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_14.png')} style={style.image} ></Image>
          <Image source={require('../images/ic_welcome_photo_15.png')} style={style.image} ></Image>
        </View>
        <View style={style.buttonWrap}>
          <Button
            containerStyle={[styleConstant.button_style,{backgroundColor:'#5f7d88'}]}
            style={styleConstant.button}
            text="注册"
            onPress={Actions.register}
          />
          <Button
            containerStyle={[styleConstant.button_style,{marginLeft:15,backgroundColor:'#303030'}]}
            style={styleConstant.button}
            text="登录"
            onPress={Actions.login}
          />
        </View>
      </View>
    );
  }
}

export default Register;
