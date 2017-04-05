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

class Register extends React.Component {
  static defaultProps = {
    watchId: null,
  }
  constructor(props){
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.genRows()),
    };
  }
  componentDidMount(){
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

  renderRow(rowData, sectionID, rowID){
    return (
      <TouchableOpacity onPress={()=>this.pressRow(rowID)}>
        <View style={styleFind.itemWrap}>
          <Image source={require('../../images/mm.jpg')} style={styleFind.profile}/>
          <View style={styleFind.itemInfo}>
            <View style={styleFind.baseInfo}>
              <Text style={styleFind.profileName}>丫丫</Text>
              <Text style={styleFind.distance}>14.71km</Text>
            </View>
            <View style={styleConstant.flexRow}>
              <View style={styleFind.sexWrap}>
                <Icon name="mars" color="#fff" size={15}/>
              </View>
              <Text style={styleFind.constellation}>处女座</Text>
            </View>
            <Text style={styleFind.sign}>一次就好，我陪你去天荒地老</Text>
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
        <ListView dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
      </View>
    );
  }
}

export default Register;
