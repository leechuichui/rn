import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const style_register = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:'#eff1f0',
  },
  itemWrap:{
    flexDirection: 'row',
    paddingTop:15,
    paddingBottom:15,
    borderBottomColor:'#d1d3d2',
    borderBottomWidth:1
  },
  profile:{
    width:70,
    height:70,
    borderRadius:5,
    marginRight:10
  },
  itemInfo:{
    flex:1,
  },
  baseInfo:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  distance:{
    color:'#c9c9c9',
    fontSize:14
  },
  profileName:{
    color:'#000',
    fontSize:16,
    marginBottom:6
  },
  sexWrap:{
    width:40,
    height:20,
    backgroundColor:'#fe97aa',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:8,
  },
  constellation:{
    color:'#b9cbd7',
    marginLeft:13
  },
  sign:{
    fontSize:14,
    color:'#979797',
    marginTop:6
  },
  labelWrap:{
    flexDirection: 'row',
  },
  labelText:{
    color:'#fff',
    fontSize:13,
    paddingTop:2,
    paddingBottom:3,
    paddingLeft:8,
    paddingRight:8,
    borderRadius:12,
    backgroundColor:'#8bd5a4',
    marginRight:10,
    marginTop:6
  }
});

export default style_register;
