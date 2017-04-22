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
import styleFind from '../../style/find/styleFind';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Register extends React.Component {
  static defaultProps = {
    watchId: null,
  }
  constructor(props){
    super(props);

    this.state = {
      dataSource:ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        console.log(initialPosition);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
    this.getData();
    //Actions.refresh({ renderRightButton: this.renderRightButton.bind(this) });
  }

  getData(page){
    React.postData('User/NearByUser',{Page:1,PageSize:10},(result)=>{
      console.log(result);
      this.setState({
        dataSource: ds.cloneWithRows(result.DataObj)
      });
    });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
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

  /**
   * 渲染性别
   */
  renderSex(rowData) {
    switch (rowData.Sex){
      case React.constant.sexEnum.boy:
        return (
          <View style={[styleFind.sexWrap,styleFind.sexWrapBoy]}>
            <Icon name="venus" color="#fff" size={12}> {rowData.Age>0?rowData.Age:''}</Icon>
          </View>
        )
      case React.constant.sexEnum.girl:
        return (
          <View style={styleFind.sexWrap}>
            <Icon name="mars" color="#fff" size={12}> {rowData.Age>0?rowData.Age:''}</Icon>
          </View>
        )
    }
    return <Text>ds</Text>
  }
  renderRow(rowData, sectionID, rowID){
    return (
      <TouchableOpacity onPress={()=>this.pressRow(rowID)}>
        <View style={styleFind.itemWrap}>
          <Image source={{uri:rowData.Profile}} style={styleFind.profile}/>
          <View style={styleFind.itemInfo}>
            <View style={styleFind.baseInfo}>
              <Text style={styleFind.profileName}>{rowData.Name}</Text>
              <Text style={styleFind.distance}>{rowData.Distance}</Text>
            </View>
            <View style={styleConstant.flexRow}>
              {this.renderSex(rowData)}
              <Text style={styleFind.constellation}>{rowData.Constellation}</Text>
            </View>
            <Text style={styleFind.sign}>{rowData.Sign}</Text>
            <View style={styleFind.labelWrap}>
              <Text style={styleFind.labelText}>叛逆</Text><Text style={styleFind.labelText}>有女友永远</Text>
            </View>
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
      <View style={styleFind.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)} enableEmptySections={true}/>
      </View>
    );
  }
}

export default Register;
