import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';

var {width, height} = Dimensions.get('window');

export default class MapScreen extends Component {


  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    width: width,
    height: height
  }
});

