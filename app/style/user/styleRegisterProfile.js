import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const style_register = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    //alignItems:'center',
    paddingBottom: 10,
  },
  content: {
    flex: 4,
    margin:0,
    alignItems:'center',
  },
  profileWrap:{
    flex:0,
    width:constant.windowWidth,
    height:110,
    backgroundColor:constant.defaultColor,
    alignItems:'center',
  },
  profile:{
    width:80,
    height:80
  },
  profileform:{
    width:constant.windowWidth,
    alignItems:'flex-start',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10
  },
  profile_title:{
    fontSize:13,
    color:'#666'
  },
  profile_input_wrap:{
    marginBottom:10
  },
  sex_wrap:{
    width:constant.windowWidth-30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomContainer:{
    flex: 6,
  }
});

export default style_register;
