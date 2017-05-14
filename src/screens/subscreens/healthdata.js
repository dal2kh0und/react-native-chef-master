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

import api from '../../api/healthapi.js';


var {width, height} = Dimensions.get('window');


export default class healthdata extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
    statusBarTextColorScheme: 'light',
    navBarButtonColor: '#ff9900',
  };


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    api.search('1 large apple').then((data) => {
      this.setState({dataSource: ds.cloneWithRows(data)});
    });
  }

  render() {
    return (
      <Image source={require('../../images/background.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>{}</Text>
        </View>
      </Image>
    );
  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 100
  },
  row:{
    flexDirection: 'row',
    height: 120,
    backgroundColor: 'rgba(28, 28, 40, .75)',
    borderBottomWidth: 1,
    borderColor: 'rgba(28, 28, 40, 1)'
  },
  title:{
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir Next',
  },
  image:{
    flex: 1
  },
  background: {
    width: width,
    height: height,
    paddingBottom: 49,
  }
});
