import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleTruth = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor:'#eff1f0',
  },
  titleSection:{
    alignItems:'center',
    marginTop:20,
    marginBottom:15
  },
  titleWrap:{
    width:320,
    height:54,
    backgroundColor:'#bebebe',
    borderRadius:16,
    alignItems:'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:14,
    color:'#fff'
  },
  itemTime:{
    textAlign:'center',
    color:'#9c9c9c',
    fontSize:16,
    marginBottom:15
  },
  truthList:{
    paddingRight:15,
    paddingLeft:15,
  },
  itemWrap:{
    // flexDirection: 'row',
    backgroundColor:'#fff',
    marginBottom:15,
  },
  itemWrapLeft:{
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
  },
  itemTitle:{
    borderBottomColor:'#d1d3d2',
    borderBottomWidth:1,
    padding:10,
    color:'#1b1b1b',
    fontSize:18
  },
  itemLeft:{
    flexDirection: 'row',
    justifyContent:'flex-end',
  },
  itemRight:{
    flexDirection: 'row',
    paddingTop:15,
    justifyContent:'flex-start'
  },
  itemProfileWrap:{
    padding:10,
    borderLeftColor:'#d1d3d2',
    borderLeftWidth:1,
  },
  profile:{
    width:50,
    height:50,
    borderRadius:25,
  },
  answer:{
    flex:1,
    color:"#1b1b1b",
    paddingLeft:15,
    fontSize:18,
    paddingTop:15
  },
  sendSection:{
    height:44,
    borderTopColor:"#d0d2d1",
    borderTopWidth:1,
    backgroundColor:'#fff'
  },
  sendWrap:{
    flexDirection: 'row',
  },
  truthBtnWrap:{
    backgroundColor:constant.defaultColor,
    flex:1,
    height:34,
    marginTop:5,
    marginLeft:10,
    justifyContent:'center',
    borderRadius:5
  },
  truthBtn:{
    color:"#fff",
    fontSize:18,
    textAlign:'center'
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

export default styleTruth;
