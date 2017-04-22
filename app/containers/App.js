
import React from 'react';
import {
  StyleSheet,
  Navigator,
  StatusBar,
  Alert,
} from 'react-native';

import {
  Router,
  Scene,
  Actions,
  ActionConst
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import Splash from '../pages/Splash';
import CategoryContainer from '../containers/CategoryContainer';
import MainContainer from '../containers/MainContainer';
import Feedback from '../pages/Feedback';
import About from '../pages/About';

import Home from '../pages/Home';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import RegisterCode from '../pages/user/RegisterCode';
import RegisterProfile from '../pages/user/RegisterProfile';
import SetPassword from '../pages/user/SetPassword';
import Profile from '../pages/user/Profile';
import EditProfile from '../pages/user/EditProfile';

import Find from '../pages/find/Find';

import ChatList from '../pages/chat/ChatList';
import Chat from '../pages/chat/Chat';
import Truth from '../pages/chat/Truth';

import TabIcon from '../components/TabIcon';

const RouterWithRedux = connect()(Router);
const backButton = require('../images/arrow_left.png');

import styleConstant from '../style/styleConstant.js';
import styleApp from '../style/styleApp.js';

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor:'#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ?
      20 : Navigator.NavigationBar.Styles.General.TotalNavHeight+18;
    style.marginBottom = computedProps.hideTabBar ?0:50 ;
  }
  return style;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
    let instance=this;
    React.getUserInfo((data)=>{
      if(data.Token){
        Actions.tabbar();
        this.setState({token:data.Token});
      }
    })
  }
  componentWillMount() {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('rgba(254, 105, 100, 1)', true);
  }
  componentDidMount() {

  }

  render() {
    return (
      <RouterWithRedux
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styleApp.navBar}
        titleStyle={styleApp.navBarTitle}
        backButtonImage={backButton}
      >
        <Scene key="root">
          <Scene key="home" hideTabBar hideNavBar component={Home}></Scene>
          <Scene key="login" hideTabBar title="登录" component={Login} type={ActionConst.REPLACE}></Scene>
          <Scene key="register" title="注册"  component={Register} type={ActionConst.REPLACE}></Scene>
          <Scene key="registerCode" title="验证码" component={RegisterCode}></Scene>
          <Scene key="registerProfile" component={RegisterProfile} ></Scene>
          <Scene key="setPassword" title="设置密码" component={SetPassword} ></Scene>
          <Scene key="chat" hideTabBar title="剧情再美，终究是" component={Chat}></Scene>
          <Scene key="profile" hideTabBar hideNavBar component={Profile}/>
          <Scene
            key="editProfile"
            hideTabBar
            title="修改资料"
            component={EditProfile}
            rightTitle="保存"
            rightButtonTextStyle={styleConstant.right_title}
            onRight={()=>{return false;}}
          />
          <Scene
            hideTabBar
            key="truth"
            component={Truth}
            rightTitle="更多"
            rightButtonTextStyle={styleConstant.right_title}
            onRight={()=>{return false;}}
          />
          {/*<Scene key="tabbar" initial={this.state.token} tabs pressOpacity={0.8} type={ActionConst.REPLACE} >*/}
          <Scene key="tabbar" initial tabs pressOpacity={0.8} type={ActionConst.REPLACE} >
            <Scene
              key="find"
              component={Find}
              title="发现"
              leftTitle="发现"
              leftButtonTextStyle={styleConstant.left_title}
              onLeft={()=>{return false;}}
              rightTitle="筛选"
              rightButtonTextStyle={styleConstant.right_title}
              onRight={()=>{return false;}}
              titleOpacity={0}
              icon={TabIcon}
              iconName="md-eye"
            />
            <Scene
              key="chatList"
              component={ChatList}
              title="消息"
              leftTitle="消息"
              leftButtonTextStyle={styleConstant.left_title}
              onLeft={()=>{return false;}}
              titleOpacity={0}
              icon={TabIcon}
              iconName="md-mail"
            />
            <Scene
              key="feedback"
              component={Feedback}
              title="建议"
              icon={TabIcon}
              iconName="md-thumbs-up"
            />
            <Scene
              key="about"
              component={About}
              title="关于"
              icon={TabIcon}
              iconName="md-information-circle"
            />
          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}

const styles = StyleSheet.create({

});

export default App;
