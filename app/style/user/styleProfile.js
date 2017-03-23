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
  },
  profileName:{
    color:'#fff',
    marginLeft:30,
    fontSize:18,
    marginTop:0
  },
  profilePhoto:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:80
  },
  profile:{
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'#fff'
  },
  profileTitle:{
    backgroundColor:'#fff',
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#dbdbdb'
  },
  profileText:{
    color:'#333',
    fontSize:18,
    paddingLeft:20,
    marginRight:15,
  },
  gender:{
    height:20,
  },
  age:{
    color:'#fff',
    marginLeft:-5
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
    backgroundColor:'#fff'
  },
  itemLi:{
    height:50,
    borderBottomWidth:1,
    borderBottomColor:'#dbdbdb',
    flexDirection:'row',
    alignItems:'center'
  },
  itemLabel:{
    fontSize:18,
    width:110,
    color:'#999'
  },
  itemValue:{
    color:'#707070',
    fontSize:18
  }

});

export default styleProfile;
