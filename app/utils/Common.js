import React from 'react';

/**
 * 格式化get URL
 * @param url
 * @param param
 */
React.formatParam=function (url,param) {
  url+='?'
  for(var key in param){
    url+=key+'='+param[key]+'&';
  }
  return url.substring(0,url.length-1);
}

React.getDataUrl=function(url,param,onSuccess,onError=React.onError){
  console.log(React.formatParam(url,param))
  fetch(React.formatParam(url,param),{
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => response.json())
  .then((responseJson) => {
    onSuccess(responseJson);
  })
  .catch((error) => {
    onError(error);
  });
}

React.getData=function (action,param,onSuccess,onError) {
  let url=React.constant.domain+"/"+action;
  this.getDataUrl(url,param,onSuccess,onError);
}

React.postData=function(action,param,onSuccess,onError=React.onError){
  let url=React.constant.domain+"/"+action;
  fetch(url,{
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param)
  }).then((response) => response.json())
  .then((responseJson) => {
    onSuccess(responseJson);
  })
  .catch((error) => {
    onError(error);
  });
}

/**
 * 获取缓存的用户信息
 */
React.getUserInfo=function (onSuccess) {
  storage.load({
    key:'userInfo'
  })
  .then((data)=>{
    console.log(data);
    onSuccess(data)
  })
  .catch((err)=>{
    console.log(err);
  })
}

/**
 * 默认错误处理
 * @param response
 */
React.onError=function (response) {
  console.log(response);
}

/* -- 业务 Start -- */

React.getGenderVal=function (gender) {
  switch(gender){
    case '男':
      return 1;
    default:
      return 2;
  }
}

/* -- 业务 End -- */
