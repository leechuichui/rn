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

class Chat extends React.Component {
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
        <ListView style={styleChat.chatList} dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
        <View style={styleChat.sendSection}>
          <View style={styleChat.sendWrap}>
            <TextInput
              style={styleChat.inputMsg}
              placeholder={"发消息..."}
              underlineColorAndroid="transparent"
              placeholdertTextColor="#999"
              multiline={true}
              numberOfLines={2}
            />
            <Icon.Button
              name="md-send"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#a6a8a7"
              size={25}
              style={styleConstant.sendBtn}
              activeOpacity={0.8}
              onPress={() => this.onPress("1")}
            />
          </View>
          <View style={styleChat.sendBar}>
            <Icon.Button
              name="md-camera"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#cdcdcd"
              size={25}
              style={styleChat.barButton}
              activeOpacity={0.8}
              onPress={() => this.onPress("1")}
            />
            <Icon.Button
              name="md-image"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#cdcdcd"
              size={25}
              activeOpacity={0.8}
              onPress={() => this.onPress("1")}
            />
            <Icon.Button
              name="md-happy"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#cdcdcd"
              size={25}
              activeOpacity={0.8}
              onPress={() => this.onPress("1")}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Chat;
