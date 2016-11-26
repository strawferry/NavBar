# How To Use!

## step1

`npm i --save  react-native-ccs-navbar`
## step2

`import NavBar from 'react-native-ccs-navbar';`

## step3

```
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import NavBar from 'react-native-ccs-navbar';

export default class TestNavBar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar title={'title'}
                leftFun={()=>{console.log('123')}}
                leftTitle={'leftTitle'}
                rightTitle={'rightTitle'}
                rightFun={()=>{console.log('123')}}
                navBgColor={'red'}
        />
      </View>
    );
  }
}

```

| props | PropTypes | use | description|
|:---:|:---:|:---:|:---:|
|isTransparent|React.PropTypes.bool|`false` or `true`|设置navbar背景色为透明,默认false背景色为白色|
|statusBarStyle| React.PropTypes.string|`'default'` or `'light-content'`|状态栏样式'default'/'light-content'|
|navBgColor| React.PropTypes.string|`red`|nav整体的背景颜色|
|statusBgColor| React.PropTypes.string|`rgba(95,95,95,1)`|主要是用于设置安卓的状态栏颜色|
|title|React.PropTypes.string|`"your title"`|文本标题|
|leftFun|React.PropTypes.func|func|左边的点击事件|
|leftIcon|React.PropTypes.any|`require("./images/youIcon.png")` or `{uri: "https://yousite.com/images/icon.png"}`|图片(本地和远程uri都可以)|
|leftTitle|React.PropTypes.string|`"your title"`|文本标题|
|rightFun| React.PropTypes.func|func|左边的点击事件|
|rightIcon|React.PropTypes.any|`require("./images/youIcon.png")` or `{uri: "https://yousite.com/images/icon.png"}`|图片(本地和远程uri都可以)|
|rightTitle|React.PropTypes.string|`"your title"`|文本标题|
|titleColor|React.PropTypes.any|`"red"`|title标题颜色|


