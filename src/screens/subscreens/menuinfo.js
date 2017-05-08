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
  TouchableOpacity,
  ListView,
  TouchableHighlight
} from 'react-native';


class menuinfo extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>
          Recipe: {this.props.recipe_id}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default menuinfo;
