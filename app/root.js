import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import rootSaga from './sagas/index';
import constant from './utils/Constant'
import commonUtils from './utils/Common'
import App from './containers/App';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const store = configureStore();

React.constant=constant;

var storage = new Storage({
  // 最大容量，默认值1000条数据循环存储
  size: 1000,

  // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  // 如果不指定则数据只会保存在内存中，重启后即丢失
  storageBackend: AsyncStorage,

  // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  //defaultExpires: 1000 * 3600 * 240,

  // 读写时在内存中缓存数据。默认启用。
  enableCache: true,

  //如果storage中没有相应数据，或数据已过期，
  //则会调用相应的sync方法，无缝返回最新数据。
  sync:function () {
    return '';
  }
})

global.storage = storage;

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
