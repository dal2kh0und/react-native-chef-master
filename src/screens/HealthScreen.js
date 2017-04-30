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

export default class HealthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Health Screen!
        </Text>
        <Text style={styles.instructions}>
          หน้าต่างข้อมูลโภชนาการของวัตถุดิบและส่วนผสม
        </Text>
        <Text style={styles.instructions}>
          แสดงข้อมูลวัตถุดิบและส่วนผสมของอาหาร,{'\n'}
          บอกแคลลอลี่และผลดีของวัตถุดิบแต่ละชนิด,{'\n'}
          ให้คำแนะนำของวัตถุดิบนั้นๆ
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


