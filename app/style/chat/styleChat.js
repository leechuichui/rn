import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleChat = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    paddingRight:10,
    paddingLeft:10,
    backgroundColor:'#eff1f0',
  },
  itemWrap:{
    // flexDirection: 'row',
    // paddingTop:15,
    paddingBottom:15,
    // borderBottomColor:'#d1d3d2',
    // borderBottomWidth:1
  },
  itemTime:{
    textAlign:'center',
    color:'#9c9c9c',
    fontSize:16,
    marginTop:20
  },
  itemLeft:{
    flexDirection: 'row',
    paddingTop:15,
    justifyContent:'flex-start'
  },
  itemRight:{
    flexDirection: 'row',
    paddingTop:15,
    justifyContent:'flex-end'
  },
  profile:{
    width:60,
    height:60,
    borderRadius:30,
  },
  msgWrap:{
    flexDirection: 'row',
    justifyContent:'flex-end',
    paddingTop:30,
    flex:1
  },
  leftMsg:{
    flex:0,
    backgroundColor:'#e6e6e6',
    color:'#3f3f3f',
    paddingLeft:10,
    paddingRight:8,
    paddingTop:5,
    lineHeight:25,
    paddingBottom:10,
    marginLeft:10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
  },
  rightMsg:{
    flex:0,
    backgroundColor:'#5f7d88',
    color:'#fff',
    paddingLeft:10,
    paddingRight:8,
    paddingTop:5,
    marginRight:10,
    lineHeight:25,
    paddingBottom:10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:20,
  },
  itemInfo:{
    flex:1,
    marginLeft:20
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
    color:'#333',
    fontSize:16,
    marginBottom:6
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

export default styleChat;
