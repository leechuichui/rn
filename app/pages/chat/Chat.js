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

import Icon from 'react-native-vector-icons/Ionicons';
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
    Actions.refresh({ renderRightButton: this.renderRightButton.bind(this) });
  }

  renderRightButton() {
    return (
      <Icon.Button
        name="md-more"
        backgroundColor="transparent"
        underlayColor="transparent"
        style={styleConstant.rightBtn}
        activeOpacity={0.8}
        onPress={() => this.onPress("1")}
      />
    );
  }

  genRows(){
    const dataBlob = [];
    for(let i = 0 ; i< 10 ; i ++ ){
      dataBlob.push("aa"+i);
    }
    return dataBlob;
  }

  onPress() {
    Alert.alert("1");
  }

  pressRow(rowID){
    alert("hellow"+rowID);
  }

  renderRow(rowData, sectionID, rowID){
    return (
      <TouchableOpacity onPress={()=>this.pressRow(rowID)}>
        <View style={styleChat.itemWrap}>
          <Text style={styleChat.itemTime}>今天 09:25</Text>
          <View style={styleChat.itemLeft}>
            <Image source={require('../../images/mm.jpg')} style={styleChat.profile}/>
            <View style={styleChat.msgWrap}>
              <Text style={styleChat.leftMsg}>
                怎么不说话了呢怎么不说话了呢怎么不说话了呢怎么不说话了呢怎么不说话了呢
              </Text>
            </View>
          </View>
          <View style={styleChat.itemRight}>
            <View style={styleChat.msgWrap}>
              <Text style={styleChat.rightMsg}>
                怎么不说话了
              </Text>
            </View>
            <Image source={require('../../images/mm.jpg')} style={styleChat.profile}/>

          </View>
        </View>
      </TouchableOpacity>
    );
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
