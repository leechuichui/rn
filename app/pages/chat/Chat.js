import React from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Linking,
  View,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styleConstant from '../../style/styleConstant';  
import styleChat from '../../style/chat/styleChat';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

class Register extends React.Component {
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.genRows()),
    };
  }

  componentDidMount() {
    //Actions.refresh({ renderRightButton: this.renderRightButton.bind(this) });
  }

  genRows(){
    const dataBlob = [];
    for(let i = 0 ; i< 10 ; i ++ ){
      dataBlob.push("aa"+i);
    }
    return dataBlob;
  }

  pressRow(rowID){
    alert("hellow"+rowID);
  }

  renderRow(rowData, sectionID, rowID){
    return (
      <TouchableOpacity onPress={()=>this.pressRow(rowID)}>
        <View style={styleChat.itemWrap}>
          <View style={styleChat.profileWrap}>
              <Image source={require('../../images/mm.jpg')} style={styleChat.profile}/>
              <View style={styleChat.msgCountWrap}>
                <Text style={styleChat.msgCount}>2</Text>
              </View>
          </View>

          <View style={styleChat.itemInfo}>
            <View style={styleChat.baseInfo}>
              <Text style={styleChat.profileName}>我是女生</Text>
              <Text style={styleChat.distance}>今天</Text>
            </View>
            <Text style={styleChat.sign}>一次就好，我陪你去天荒地老</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onPress() {
    Alert.alert("1");
  }

  renderRightButton() {
    
  }

  render() {
    return (
      <View style={styleChat.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
      </View>
    );
  }
}

export default Register;
