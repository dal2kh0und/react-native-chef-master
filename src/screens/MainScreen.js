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
  Image,
  Dimensions,
  ScrollView
} from 'react-native';


var {width, height} = Dimensions.get('window');


export default class MainScreen extends Component {

  // hide navigation bar
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  };

  render() {
    return (
      <Image source={require('../images/background.jpg')}
        style={styles.background}>
        <ScrollView style={styles.container}>

          <View style={styles.main}>
            <Text>Daily Content Here!</Text>
          </View>

          <View style={styles.menu}>
            <Text>Main Content Here!</Text>
          </View>

        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20
  },
  background: {
    width: width,
    height: height,
  },
  main: {
    //backgroundColor: 'red',
    height: 200,
  },
  menu: {
    marginTop: 30,
    //backgroundColor: 'red',
    height: 900,
  }
});
