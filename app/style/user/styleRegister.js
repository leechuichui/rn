import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const style_register = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    //alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  content: {
    flex: 4,
    margin:0,
    alignItems:'center',
  },
  reg_msg:{
    flex:0,
    color:constant.fontColor,
    fontSize:15,
    lineHeight:30,
    textAlign:'center',
  },
  reg_inputwp:{
    flexDirection: 'row',
    flex:0,
    //width:300,
    height:40,
    marginTop:15,
    paddingLeft:5,
    borderBottomWidth:1,
    borderBottomColor:'#6f7170',
  },
  reg_input:{
    flex:1,
    textAlign:'left',
    fontSize:16,
    height:40,
    padding:0
  },
  forgetwrap:{
    flexDirection: 'row',
    flex:0,
  },
  forgetbtn:{
    flex:1,
    height:40,
    justifyContent: 'center',
    alignItems:'flex-end'
  },
  bottomContainer:{
    flex: 6,
  }
});

export default style_register;
