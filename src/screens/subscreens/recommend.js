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


export default class newMenu extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarBlur: true,
    statusBarTextColorScheme: 'light',
  };


  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    api.search('steak').then((data) => {
      this.setState({dataSource: ds.cloneWithRows(data)});
    });
  }
  render() {
    return (
      <Image source={require('../../images/background.jpg')}
        style={styles.background}>

      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData, rowID) => {
          console.log('rowData', rowData);
          return (
            <TouchableOpacity onPress={()=> this.props.navigator.push({index: 1,
               passProps:{imdbID: rowData.imdbID}})}>
              <View style={styles.row}>
                  <View style={{flex:3}}>
                    <Image style={styles.image} source={{uri: rowData.image_url}}/>
                  </View>
                  <View style={{flex:10, padding: 10}}>
                    <Text style={styles.title}>{rowData.title}</Text>
                  </View>
                  <View key={rowID}>
                    <Text>Next</Text>
                  </View>
              </View>
            </TouchableOpacity>
          )
        }

        }

      />

      </Image>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 64
  },
  row:{
    flexDirection: 'row',
    height: 100
  },
  title:{
    fontSize: 20
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
