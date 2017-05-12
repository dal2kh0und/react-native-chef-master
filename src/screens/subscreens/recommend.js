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


export default class recommend extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
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

          return (
            <TouchableOpacity onPress={()=> this.props.navigator.push({
              screen: "chef.menuinfo",
              title: "Recipes",
              passProps:{recipe_id: rowData.recipe_id, title: rowData.title,
              source_url: rowData.source_url, image_url: rowData.image_url} })}>
              <View style={styles.row}>
                  <View style={{flex:5}}>
                    <Image style={styles.image} source={{uri: rowData.image_url}}/>
                  </View>
                  <View style={{flex:9, padding: 10, paddingLeft: 20, paddingRight: 30}}>
                    <Text style={styles.title}>{rowData.title}</Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center',
                    alignItems: 'center', paddingRight: 20}} key={rowID}>
                    <Image style={{width: 15, height: 45, resizeMode:'contain', tintColor:'gray'}} source={require('../../icon/leftarrow.png')}/>
                  </View>
              </View>
            </TouchableOpacity>
          )
        }}
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
