/**
 * loading 小圆圈
 * Created by guowei on 2017/4/22.
 */

import style from '../style/components/styleSmallLoading';
import React,{Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  ActivityIndicator
} from 'react-native';


class SmallLoading extends Component{
  static defaultProps = {
    isShow: false,
  }
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isShow) {
      return (
        <View style={style.container}>
          <View style={style.loadWrap}>
            <Image source={require('../images/loadingbg.png')} style={style.loadBg}></Image>
            <ActivityIndicator animating={this.props.isShow} size="large" style={style.load}
                               color={React.constant.defaultColor}/>
          </View>
        </View>
      );
    }
    else{
      return null;
    }
  }
}

export default SmallLoading;
