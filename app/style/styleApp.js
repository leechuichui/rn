import React from 'react';
import { StyleSheet } from 'react-native';
import constant from './styleConstant';

const style_app = StyleSheet.create({
  navBar: {
    backgroundColor: constant.defaultColor,
    borderBottomColor:constant.defaultColor,
    marginTop:20,
    fontSize:18,
    color:'#fff'
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 18,
    textAlign:'left',
   	position:'absolute',
   	marginLeft:40,
  }
});

export default style_app;
