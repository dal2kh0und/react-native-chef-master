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
  View
} from 'react-native';

export default class MenuScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Menu Screen!
        </Text>
        <Text style={styles.instructions}>
          หน้าต่างสำหรับเมนูและสูตรอาหาร 
        </Text>
        <Text style={styles.instructions}>
          แสดงข้อมูล เมนูอาหาร, แยกประเภทอาหาร,{'\n'}
          แสดงขั้นตอนการทำอาหาร
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


