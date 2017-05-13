import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  WebView,
  Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class webview extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
    statusBarTextColorScheme: 'light',
    tabBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      url: this.props.source_url
    };
  }

  render() {
    return (
      <Image source={require('../../images/background.jpg')}
        style={styles.background}>
        <WebView
          source={{uri: this.state.url}}
          style={styles.webview}>
        </WebView>
      </Image>
      )
    }

}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  webview: {
    width: width,
    paddingTop: 64
  }
});
