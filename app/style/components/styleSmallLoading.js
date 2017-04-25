import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleSmallLoading = StyleSheet.create({
  container: {
    position:'absolute',
    left:0,
    top:0,
    height:80,
    width:constant.windowWidth,
    alignItems:'center',
    justifyContent:'center'
  },
  loadWrap:{
    width:70,
    height:70,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  loadBg:{
    width:60,
    height:60
  },
  load:{
    position:"absolute",
    top:17,
    left:17
  },
  titleWrap:{
    flexDirection:'row',
    justifyContent:'center'
  },
  divideLine:{
    height:1,
    width:80,
    backgroundColor:'#eceeed',
    marginTop:10
  },
  title:{
    color:'#d0d2d1',
    fontSize:14,
    marginLeft:10,
    marginRight:10
  },
  loginContent:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center'
  },
  loginItem:{
    alignItems:'center'
  },
  loginIcon:{
    width:50,
    height:50
  },
  loginText:{
    color:'#adafae',
    fontSize:18,
    marginTop:10
  }
});

export default styleSmallLoading;
