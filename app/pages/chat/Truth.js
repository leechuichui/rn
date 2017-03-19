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
import styleTruth from '../../style/chat/styleTruth';

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
      <View style={[styleTruth.itemWrap,styleTruth.itemWrapLeft]}>
        <Text style={styleTruth.itemTitle}>1.你看过的最好看的电视</Text>
        <View style={styleTruth.itemLeft}>
          <Text style={styleTruth.answer}>请保持文明社交礼仪</Text>
          <View style={styleTruth.itemProfileWrap}>
            <Image source={require('../../images/mm.jpg')} style={styleTruth.profile}/>
          </View>
        </View>
      </View>
    );
  }

  renderHeader(){
    return (
      <View>
        <View style={styleTruth.titleSection}>
          <View style={styleTruth.titleWrap}>
            <Text style={styleTruth.title}>完成15轮真心话游戏，可解锁对方资料</Text>
            <Text style={styleTruth.title}>请保持文明社交礼仪，行为不良将受到严厉处罚</Text>
          </View>
        </View>
        <Text style={styleTruth.itemTime}>今天 09:25</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styleTruth.container}>
        <ListView
          style={styleTruth.truthList}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderHeader={this.renderHeader.bind(this)}
        />
        <View style={styleTruth.sendSection}>
          <View style={styleTruth.sendWrap}>
            <Button
              text="真心话大冒险"
              containerStyle={styleTruth.truthBtnWrap}
              activeOpacity={0.8}
              style={styleTruth.truthBtn}
            />
            <Icon.Button
              name="md-happy"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#a6a8a7"
              style={{marginLeft:10}}
              iconStyle={{marginRight:0}}
              size={25}
              activeOpacity={0.8}
              onPress={() => this.onPress("1")}
            />
            <Icon.Button
              name="md-add"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#a6a8a7"
              size={25}
              activeOpacity={0.8}
              onPress={() => this.onPress("1")}
            />
          </View>
          <View style={styleTruth.sendBar}>
            <Icon.Button
              name="md-camera"
              backgroundColor="transparent"
              underlayColor="transparent"
              color="#cdcdcd"
              size={25}
              style={styleTruth.barButton}
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

export default Register;
