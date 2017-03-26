import React from 'react';
import { StyleSheet } from 'react-native';
import constant from '../styleConstant';  

const styleEditProfile = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    backgroundColor:'#eff1f0',
    paddingBottom:15
  },
  itemTitleWrap:{
    paddingTop:12,
    paddingBottom:8,
    paddingLeft:20
  },
  itemTitle:{
    color:'#909291',
    fontSize:16
  },
  itemInfo:{
    borderTopWidth:1,
    borderTopColor:'#dbdbdb',
    paddingLeft:20,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#dbdbdb',
  },
  itemProfile:{
    height:75,
    borderBottomWidth:1,
    borderBottomColor:'#dbdbdb',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:20
  },
  profileImage:{
    width:55,
    height:55
  },
  itemLi:{
    height:50,
    borderBottomWidth:1,
    borderBottomColor:'#dbdbdb',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:20,
  },
  itemContent:{
    flexDirection:'row',
    alignItems:'center'
  },
  rightIcon:{
    color:'#c5c6ca',
    marginLeft:10
  },
  itemLabel:{
    fontSize:18,
    width:110,
    color:'#6e6e6e'
  },
  itemValue:{
    color:'#707070',
    fontSize:18
  },
  
});

export default styleEditProfile;
