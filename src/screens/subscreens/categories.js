/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  rowData,
  ListView,
  Dimensions
} from 'react-native';

import api from '../../api/api.js';


var {width, height} = Dimensions.get('window');


export default class categories extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarBlur: true,
    statusBarTextColorScheme: 'light',
  };


  constructor() {
    super();
  }

  render() {
    return (
      <Image source={require('../../images/background.jpg')}
        style={styles.background}>

      </Image>
    );
  }
}


const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    paddingBottom: 49,
  }
});
