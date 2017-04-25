import React from 'react';
import {
  StyleSheet,
  ListView,
  Modal,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  Linking,
  View,
  Alert,
  RefreshControl
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleConstant from '../../style/styleConstant';  
import styleFind from '../../style/find/styleFind';

import Button from '../../components/Button';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class Find extends React.Component {
  static defaultProps = {
    watchId: null,
  }
  constructor(props){
    super(props);

    this.state = {
      dataSource:ds.cloneWithRows([]),
      isFresh:false,
      resultData:[],
      page:1
    };
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     var initialPosition = JSON.stringify(position);
    //     console.log(initialPosition);
    //   },
    //   (error) => alert(error.message),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    // );
    //
    // this.watchID = navigator.geolocation.watchPosition((position) => {
    //   var lastPosition = JSON.stringify(position);
    //   this.setState({lastPosition});
    // });
    this.getData();
    //Actions.refresh({ renderRightButton: this.renderRightButton.bind(this) });
  }

  getData(){
    React.postData('User/NearByUser',{Page:this.state.page,PageSize:10},(result)=>{
      var resultArr=[];
      if(this.state.page>1){
        resultArr=this.state.resultData.concat(result.DataObj);
        console.log(resultArr);
      }
      else{
        resultArr=result.DataObj;
      }
      this.setState({
        dataSource: ds.cloneWithRows(resultArr),
        isFresh:false,
        resultData:resultArr
      });
    });
  }

  /**
   * 下拉刷新
   */
  onFresh(){
    this.setState({
      isFresh:true,
      page:1
    });
    this.getData();
  }

  /**
   * 加载更多
   */
  loadMore(){
    this.setState({
      page:++this.state.page
    });
    this.getData();
  }

  componentWillUnmount() {
    //navigator.geolocation.clearWatch(this.watchID);
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          enableEmptySections={true}
          onEndReachedThreshold={10}
          onEndReached={ this.loadMore.bind(this) }
          refreshControl={
            <RefreshControl
              refreshing={ this.state.isFresh }
              onRefresh={ this.onFresh.bind(this) }
              tintColor="#ff0000"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#fff"/>
          }
        />
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={true}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={styleFind.modal}>
            <View style={styleFind.modalContent}>
              <Text style={styleFind.modalTitle}>想看的用户</Text>
              <View style={styleFind.modalBar}>
                <Text style={styleFind.modalBarText}>全部</Text>
                <Text style={styleFind.modalBarText}>男</Text>
                <Text style={styleFind.modalBarText}>女</Text>
              </View>
              <Text style={styleFind.modalTitle}>地区</Text>
              <View style={styleFind.modalBar}>
                <Text style={styleFind.modalBarText}>全部</Text>
                <Text style={styleFind.modalBarText}>同城</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default Find;
