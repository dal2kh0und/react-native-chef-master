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
  ListView
} from 'react-native';
import api from '../api/api.js';

export default class RowHealthScreen extends Component {

  static navigatorStyle = {
    navBarHidden: false,
    drawUnderTabBar: true,
    navBarBlur: true,
    //navBarBackgroundColor: 'rgba(28, 28, 40, 1)',

    // statu bar
    //statusBarTextColorScheme: 'light',
  };


  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    api.search('chicken').then((data) => {
      this.setState({dataSource: ds.cloneWithRows(data)});
    });
  }
  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(rowData) => {
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

              </View>
            </TouchableOpacity>
          )
        }

        }
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          <View key={rowID} style={{height:1, backgroundColor: 'lightgray'}}/>
        }
      />
    );
  }
}


const styles = StyleSheet.create({
  container:{

    flex:1
  },
  row:{
    flexDirection: 'row',
    height: 100
  },

  title:{
    fontSize: 20
  },
  image:{
    height: 150,
  }
});
