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

import Icon from 'react-native-vector-icons/Ionicons';
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
                <Text>梦梦</Text>
              </View>
            </Image>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default Register;
