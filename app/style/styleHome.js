import React from 'react';
import { StyleSheet,Navigator } from 'react-native';
import constant from './styleConstant';

const styleHome = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor:'#eff1f0',
  },
  imageWrap:{
    flexDirection:'row',
    flexWrap:'wrap',
    flex:1
  },
  image:{
    width:constant.windowWidth/3,
    height:constant.windowHeight/5
  },
  buttonWrap:{
    position:'absolute',
    left:0,
    bottom:20,
    flexDirection:'row',
    paddingLeft:15,
    paddingRight:15
  }
});

export default styleHome;
