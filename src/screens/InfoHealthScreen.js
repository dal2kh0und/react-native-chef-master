import React, {Component} from 'react';
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

export default class InfoHealthScreen extends Component {
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

  saperator(){
    return (
      <View style={{height:1, backgroundColor:'lightgray', margin:5}}/>
    );
  }

  render() {
    return (

        <View style={styles.container}>
        <View style={{flex:1}}>
          <Image style={styles.image} source={{uri: this.state.image_url}}/>
        </View>
        </View>

    );
  }
}

let styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    paddingTop:70,
    flexDirection: 'row'
  },
  image:{
    height: 200
  },
  title:{
    fontSize: 25
  },
  subTitle:{
    fontSize: 20
  }
});
