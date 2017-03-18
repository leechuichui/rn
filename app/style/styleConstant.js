import {Dimensions} from 'react-native';

const constant = {
  fontColor:'#696b6a',
  defaultColor:'#fe6964',
  windowWidth: Dimensions.get('window').width,
  flexRow:{
    flexDirection: 'row',
  },
  inputwp:{
    flexDirection: 'row',
    flex:0,
    //width:300,
    height:40,
    paddingLeft:5,
    borderBottomWidth:1,
    borderBottomColor:'#6f7170',
  },
  input:{
    flex:1,
    textAlign:'left',
    fontSize:16,
    height:40,
    padding:0
  },
  button_wrap:{
    flexDirection: 'row',
    flex:0,
    height:40,
    marginTop:30,
  },
  button_style:{
    flex:1,
    height:40,
    justifyContent: 'center',
    borderRadius:5,
    backgroundColor:'#fe6964',
  },
  button:{
    fontSize:16,
    color:'#fff',
    textAlign:'center'
  },
  left_title:{
    fontSize:18,
    color:'#fff',
    marginLeft:5
  },
  right_title:{
    fontSize:18,
    color:'#fff',
    marginLeft:5
  },
  rightBtn:{
    flex:1,

  }
}

export default constant;
