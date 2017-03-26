import React from 'react';
import {
  StyleSheet,
  ScrollView,
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
        <ScrollView>
          <View style={style.itemTitleWrap}>
            <Text style={style.itemTitle}>账户信息</Text>
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
              <Text style={style.itemLabel}>昵称</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>梦</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
            <View style={[style.itemLi,{borderBottomWidth:0}]}>
              <Text style={style.itemLabel}>生日</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>1991-04-11</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
          </View>
          <View style={style.itemTitleWrap}>
            <Text style={style.itemTitle}>我的信息</Text>
          </View>
          <View style={style.itemInfo}>
            <View style={style.itemLi}>
              <Text style={style.itemLabel}>星座</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>金牛座</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
            <View style={style.itemLi}>
              <Text style={style.itemLabel}>身高</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>170</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
            <View style={style.itemLi}>
              <Text style={style.itemLabel}>职业</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>政府机构</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
            <View style={style.itemLi}>
              <Text style={style.itemLabel}>城市</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>四川省成都市</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
            <View style={style.itemLi}>
              <Text style={style.itemLabel}>个人签名</Text>
              <View style={style.itemContent}>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
            <View style={[style.itemLi,{borderBottomWidth:0}]}>
              <Text style={style.itemLabel}>感情状态</Text>
              <View style={style.itemContent}>
                <Text style={style.itemValue}>单身</Text>
                <Icon name="ios-arrow-forward" size={25} style={style.rightIcon}></Icon>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;
