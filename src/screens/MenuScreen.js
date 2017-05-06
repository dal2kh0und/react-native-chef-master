/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 // menu

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';


var {width, height} = Dimensions.get('window');

class MenuScreen extends Component {


  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
    //navBarBackgroundColor: 'rgba(28, 28, 40, 1)',
    // navBarTextColor: 'white',
    // navBarButtonColor: 'darkgray',

    // statu bar
    statusBarTextColorScheme: 'light',
  };

  constructor() {
    super();
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }


  render() {
    return (
      <Image source={require('../images/background.jpg')}
        style={styles.background}>

        <ScrollView style={styles.list}>
          <TouchableOpacity onPress={this.onPushPopular.bind(this)} >
            <Text>Test to popular screen</Text>
          </TouchableOpacity>
        </ScrollView>

      </Image>
    );
  }

  onPushPopular() {
    this.props.navigator.push({
      title: "Popular",
      screen: "chef.popular",
    });
  }
}

const styles = StyleSheet.create({
  list: {
    marginTop: 64
  },
  background: {
    width: width,
    height: height,
    paddingBottom: 49,
  }
});

export default MenuScreen;
