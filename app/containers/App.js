
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

//第三方组件
import WebIM from '../../lib/WebIM'

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
        //登录IM
        this.loginIm(data);
        this.setState({token:data.Token});
        //Actions.tabbar();
      }
    })
  }
  componentWillMount() {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('rgba(254, 105, 100, 1)', true);
  }
  componentDidMount() {

  }

  /**
   * 登录IM
   */
  loginIm(data){
    WebIM.conn.listen({
      // xmpp连接成功
      onOpened: (msg) => {
        alert(1);
        console.log(msg);
        // 出席后才能接受推送消息
        WebIM.conn.setPresence();
        // 获取好友信息
        //NavigationActions.contacts()
      },
      // 出席消息
      onPresence: (msg) => {
        alert(2);
        console.debug('onPresence', msg, store.getState())
        switch (msg.type) {
          case 'subscribe':


            // 加好友时双向订阅过程，所以当对方同意添加好友的时候
            // 会有一步对方自动订阅本人的操作，这步操作是自动发起
            // 不需要通知提示，所以此处通过state=[resp:true]标示
            if (msg.status === '[resp:true]') {
              return
            }

            store.dispatch(SubscribeActions.addSubscribe(msg))
            break;
          case 'subscribed':
            store.dispatch(RosterActions.getContacts())
            Alert.alert(msg.from + ' ' + I18n.t('subscribed'))
            break;
          case 'unsubscribe':
            // TODO: 局部刷新
            store.dispatch(RosterActions.getContacts())
            break;
          case 'unsubscribed':
            // 好友退订消息
            store.dispatch(RosterActions.getContacts())
            Alert.alert(msg.from + ' ' + I18n.t('unsubscribed'))
            break;
        }
      },
      // 各种异常
      onError: (error) => {
        alert(3);
        console.log(error)
        // 16: server-side close the websocket connection
        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED) {
          console.log('WEBIM_CONNCTION_DISCONNECTED', WebIM.conn.autoReconnectNumTotal, WebIM.conn.autoReconnectNumMax);
          if (WebIM.conn.autoReconnectNumTotal < WebIM.conn.autoReconnectNumMax) {
            return;
          }
          Alert.alert('Error', 'server-side close the websocket connection')
          NavigationActions.login()
          return;
        }
        // 8: offline by multi login
        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_SERVER_ERROR) {
          console.log('WEBIM_CONNCTION_SERVER_ERROR');
          Alert.alert('Error', 'offline by multi login')
          NavigationActions.login()
          return;
        }
        if (error.type == 1) {
          let data = error.data ? error.data.data : ''
          data && Alert.alert('Error', data)
          store.dispatch(LoginActions.loginFailure(error))
        }
      },
      // 连接断开
      onClosed: (msg) => {
        alert(4);
        console.log('onClosed')
      },
      // 更新黑名单
      onBlacklistUpdate: (list) => {
        store.dispatch(BlacklistActions.updateBlacklist(list))
      },
      // 文本信息
      onTextMessage: (message) => {
        console.log('onTextMessage', message)
        store.dispatch(MessageActions.addMessage(message, 'txt'))
      },
      onPictureMessage: (message) => {
        console.log('onPictureMessage', message)
        store.dispatch(MessageActions.addMessage(message, 'img'))
      }
    });
    var options = {
      apiUrl: WebIM.config.apiURL,
      user: 'guowei1233',
      pwd: '123456',
      appKey: WebIM.config.appkey
    };
    WebIM.conn.open(options);
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
          <Scene key="chat" initial hideTabBar title="剧情再美，终究是" component={Chat}></Scene>
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
          <Scene key="tabbar" tabs pressOpacity={0.8} type={ActionConst.REPLACE} >
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
