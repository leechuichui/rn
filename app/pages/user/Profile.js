import React from 'react';
import {
  StyleSheet,
  ScrollView,
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
import styleProfile from '../../style/user/styleProfile';

import { Actions } from 'react-native-router-flux';
import Button from '../../components/Button';

class Register extends React.Component {
  constructor(props){
    super(props);
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

  onPress() {
    Alert.alert("1");
  }

  render() {
    return (
      <View style={styleProfile.container}>
        <ScrollView>
          <View style={styleProfile.profileWrap}>
            <Image source={require('../../images/default_profile_background.png')} style={styleProfile.profileBackground}>
              <View style={styleProfile.nameWrap}>
                <TouchableOpacity onPress={this.onPress}  activeOpacity={0.8}>
                  <Image source={require('../../images/arrow_left.png')} style={styleProfile.backImage}></Image>
                </TouchableOpacity>
                <Text style={styleProfile.profileName}>梦梦</Text>
              </View>
              <View style={styleProfile.profilePhoto}>
                <Image source={require('../../images/meinv.png')} style={styleProfile.profile}></Image>
              </View>
            </Image>
          </View>
          <View style={styleProfile.profileTitle}>
            <Text style={styleProfile.profileText}>梦梦</Text>
            <Icon.Button name="mars" color="#fff" style={styleProfile.gender} size={15} backgroundColor="#ff96aa">
              <Text style={styleProfile.age}>24</Text>
            </Icon.Button>
          </View>
          <View style={styleProfile.itemTitleWrap}>
            <Text style={styleProfile.itemTitle}>我的信息</Text>
          </View>
          <View style={styleProfile.itemInfo}>
            <View style={styleProfile.itemLi}>
              <Text style={styleProfile.itemLabel}>星座</Text>
              <Text style={styleProfile.itemValue}>金牛座</Text>
            </View>
            <View style={styleProfile.itemLi}>
              <Text style={styleProfile.itemLabel}>职业</Text>
              <Text style={styleProfile.itemValue}>政府机构</Text>
            </View>
            <View style={styleProfile.itemLi}>
              <Text style={styleProfile.itemLabel}>城市</Text>
              <Text style={styleProfile.itemValue}>四川省成都市</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;
