/**
 * 第三方登录
 * Created by guowei on 2017/3/27.
 */

import style from '../style/components/styleThirdLogin';
import React,{Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import * as QQAPI from 'react-native-qq';


class ThirdLogin extends Component{
  constructor(props) {
    super(props);
  }

  /**
   * QQ登录
   */
  qqLogin(){
    let promise=QQAPI.login('all');
    let instance=this;
    promise.then(function(result) {
      console.log(result);
      instance.login(result)
      //instance.getUserInfo(result);

    }, function(value) {
      alert("error");
    });
  }

  /**
   * 登录系统
   */
  login(data){
    let instance=this;
    React.getData('User/ThirdLogin',{accessToken:data.access_token},(result)=>{
      console.log(result);
      //曾经登录过(账号已存在)
      if(result.DataObj){
        instance.loginAccess(result);
      }
      else{
        React.getDataUrl('https://graph.qq.com/user/get_user_info',{
          access_token: data.access_token,
          openid:data.openid,
          oauth_consumer_key:React.constant.qqAppId
        },(result)=>{
          //注册(先获取环信Token)
          React.ImPost('users',{username:result.nickname})
          React.postData('User/ThirdRegister',{
            NickName:result.nickname,
            Gender:React.getGenderVal(result.gender),
            Profile:result.figureurl_qq_2,
            AccessToken:data.access_token
          },(result)=>{
            if(result.ResultType==0){
              instance.loginAccess(result);
            }
            else{
              Alert.alert(result.Msg);
            }
          });
        })
      }
    })
  }

  loginAccess(data){
    storage.save({
      key:'userInfo',
      rawData:data.DataObj
    });
    Actions.tabbar();
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.titleWrap}>
          <View style={style.divideLine}></View>
          <Text style={style.title}>第三方账号快速登录</Text>
          <View style={style.divideLine}></View>
        </View>
        <View style={style.loginContent}>
          <TouchableOpacity
            style={style.loginItem}
            onPress={this.qqLogin.bind(this)}
          >
            <Image source={require('../images/qq_login.png')} style={style.loginIcon}></Image>
            <Text style={style.loginText}>QQ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ThirdLogin;
