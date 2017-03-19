import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleChat = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor:'#eff1f0',
  },
  chatList:{
    paddingRight:10,
    paddingLeft:10,
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
  sendSection:{
    height:100,
    borderTopColor:"#d0d2d1",
    borderTopWidth:1
  },
  sendWrap:{
    flexDirection: 'row',
  },
  inputMsg:{
    flex:1,
    height:50,
    color:"#333",
  },
  sendBtn:{
    marginLeft:10
  },
  sendBar:{
    flexDirection: 'row',
    marginTop:5,
    marginLeft:10
  },
  barButton:{
    marginLeft:-5,
  }
});

export default styleChat;
