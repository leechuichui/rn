import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleProfile = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor:'#eff1f0',
  },
  profileWrap:{
    flexDirection:'row',
    height:220,
  },
  profileBackground:{
    flex:1,
    height:220
  },
  nameWrap:{
    position:'absolute',
    flexDirection:'row',
    top:30,
    left:0,
    paddingLeft:18
  },
  backImage:{
    width:26,
    height:26
  }
});

export default styleProfile;
