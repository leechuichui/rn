import React from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Linking,
  View,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styleConstant from '../../style/styleConstant';  
import style from '../../style/user/styleEditProfile';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

class Register extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  onPress() {
    Alert.alert("1");
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.itemTitleWrap}>
          <Text style={style.itemTitle}>我的信息</Text>
        </View>
        <View style={style.itemInfo}>
          <View style={style.itemProfile}>
            <Text style={style.itemLabel}>头像</Text>
            <View style={style.itemContent}>
              <Image source={require('../../images/profile.png')} style={style.profileImage}></Image>
              <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
            </View>
          </View>
          <View style={style.itemLi}>
            <Text style={style.itemLabel}>星座</Text>
            <Text style={style.itemValue}>金牛座</Text>
          </View>
          <View style={style.itemLi}>
            <Text style={style.itemLabel}>身高</Text>
            <Text style={style.itemValue}>170</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Register;
