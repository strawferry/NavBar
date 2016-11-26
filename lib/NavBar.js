


'use strict';

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  PixelRatio,
  StatusBar
} from 'react-native';

const dip = 1/PixelRatio.get();
const {height, width} = Dimensions.get('window');

export default class NavBar extends Component {

  static defaultProps = {
    isTransparent: false,
    statusBarStyle: "default",
    statusBgColor: "rgba(95,95,95,1)",
    navBgColor: '#FFFFFF',
    title: "title",
    leftIcon: require('./icon_back.png'),
    rightIcon: require('./icon_share.png'),
  };  // 注意这里有分号
  static propTypes = {
    isTransparent: React.PropTypes.bool,
    statusBarStyle: React.PropTypes.string,
    navBgColor: React.PropTypes.string,
    statusBgColor: React.PropTypes.string,
    title: React.PropTypes.string,
    leftFun: React.PropTypes.func,
    leftIcon: React.PropTypes.any,
    leftTitle: React.PropTypes.string,
    rightFun: React.PropTypes.func,
    rightIcon: React.PropTypes.any,
    rightTitle: React.PropTypes.string,
    titleColor: React.PropTypes.any,
  };

  render() {
    return (
      <View style={[styles.nav, {backgroundColor: this.props.isTransparent ? 'transparent' : this.props.navBgColor, borderBottomWidth: this.props.isTransparent ? 0: dip,}]}>
        <View style={{height: 44, position: 'absolute', bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={[{fontSize: 18, marginTop: 0, color: this.props.isTransparent ? '#FFFFFF':"#333333", backgroundColor: 'transparent', maxWidth: 0.6*width}, this.props.titleColor ? {color: this.props.titleColor }: null ]}
                allowFontScaling={false} numberOfLines={1} >
            {this.props.title}
          </Text>
        </View>
        {this.props.leftFun || this.props.leftTitle ?
          <TouchableOpacity onPress={this.props.leftFun}
                            style={{position: 'absolute', bottom: 0, left: 0, height: 44, minWidth: 44, justifyContent: 'center'}}>
            <Text style={[{fontSize: 14, marginLeft: 10, color: this.props.isTransparent ? '#FFFFFF': '#333333', backgroundColor: 'transparent'}, this.props.titleColor ? {color: this.props.titleColor }: null]} allowFontScaling={false} >{this.props.leftTitle}</Text>
          </TouchableOpacity>:null}
        {this.props.leftFun && !this.props.leftTitle ? <TouchableOpacity style={{position: 'absolute', bottom: 0, left: 0, height: 44, width: 44, justifyContent: 'center', alignItems: 'center'}} onPress={this.props.leftFun}>
          <Image source={this.props.leftIcon}
                 style={{height: 20, width: 20}}/>
        </TouchableOpacity>:null}
        {this.props.rightFun ?
          <TouchableOpacity onPress={this.props.rightFun}
                            style={{position: 'absolute', bottom: 0, right: 0, height: 44, minWidth: 44, justifyContent: 'center'}}>
            <Text style={[{fontSize: 14, marginRight: 10, color: this.props.isTransparent ? '#FFFFFF': '#333333', backgroundColor: 'transparent'}, this.props.titleColor ? {color: this.props.titleColor }: null]} allowFontScaling={false}>{this.props.rightTitle}</Text>
          </TouchableOpacity>:null}
        {this.props.rightFun && !this.props.rightTitle ?
          <TouchableOpacity onPress={this.props.rightFun}
                            style={{position: 'absolute', bottom: 0, right: 0, height: 44, width: 44, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={this.props.rightIcon} style={{height: 20, width: 20}}/>
        </TouchableOpacity>:null}
        <StatusBar
          translucent={true}
          backgroundColor= {this.props.statusBgColor}
          barStyle= {this.props.statusBarStyle}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nav: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#E6E6E6'
  }
});
