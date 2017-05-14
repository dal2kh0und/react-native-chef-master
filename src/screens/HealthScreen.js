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
   Dimensions,
   ScrollView,
 } from 'react-native';

import api from '../api/healthapi.js';

 var {width, height} = Dimensions.get('window');
 var list = ['1%20large%20apple'];


export default class HealthScreen extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
    statusBarTextColorScheme: 'light',
    navBarTextColor: 'white',
    navBarButtonColor: '#ff9900',
  };


  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    api.search(list).then((data) => {
      this.setState({dataSource: ds.cloneWithRows(data)});
    });
  }

  render() {
    return (
      <Image source={require('../images/background.jpg')}
        style={styles.background}>
        <ScrollView style={styles.list}>

          <ListView style={styles.content}
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={(rowData) =>
              <TouchableOpacity onPress={()=> this.props.navigator.push({
                screen: "chef.healthdata",
                title: rowData.uri})}>
              <View style={styles.row}>
                <View style={{flex: 12}}>
                  <Text style={styles.text}>{rowData.glycemicIndex}</Text>
                  <Text style={styles.text}>{rowData.text}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Image style={styles.img} source={require('../icon/leftarrow.png')}/>
                </View>
              </View>
              </TouchableOpacity>
            }/>

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
    marginTop: 64,
    backgroundColor: 'rgba(28, 28, 40, .75)',
  },
  background: {
    width: width,
    height: height,
    paddingBottom: 49,
  },
  pop: {
    flex: 1,
    width: width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popText: {
    flex: 1,
    width: width,
    backgroundColor: 'rgba(28, 28, 40, .55)',
    textAlign: 'center',
    paddingTop: 65,
    fontSize: 25,
    color: 'white',
    textShadowColor: '#393939',
    textShadowOffset: {width: 2.5, height: 2.5},
    textShadowRadius: 3
  },
  here: {
    flex: 2,
    width: width,
    backgroundColor: 'rgba(28, 28, 40, .55)',
    textAlign: 'center',
    color: '#ff9900',
    fontSize: 25,
    fontWeight: 'bold'
  },
  text: {
    padding: 20,
    color: 'white',
  },
  row: {
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 10, height: 25, resizeMode:'contain', tintColor:'gray'
  }
});
