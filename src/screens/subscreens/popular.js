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
  ListView,
  Image
} from 'react-native';


import api from '../../api/api.js';


var {width, height} = Dimensions.get('window');

class popular extends Component {

  // static navigatorButtons = {
  //   leftButtons: [
  //     {
  //       //title: 'Category',
  //       id: 'category',
  //       icon: require('../../src/icon/navicon_menu.png'),
  //     },
  //   ]
  // };

  static navigatorStyle = {
    navBarHideOnScroll: true,
    drawUnderTabBar: true,
    drawUnderNavBar: true,
    navBarBlur: true,
    //navBarBackgroundColor: 'rgba(28, 28, 40, 1)',
    navBarTextColor: 'white',
    navBarButtonColor: 'darkgray',

    // statu bar
    statusBarTextColorScheme: 'light',
    statusBarHideWithNavBar: true,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
    api.search('egg').then((data) => {
      this.setState({dataSource: ds.cloneWithRows(data)});
    });
    // this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  // onNavigatorEvent(event) {
  //   if (event.id == 'category'){
  //     this.props.navigator.push({
  //       title: "Category",
  //       screen: "chef.categories"
  //     });
  //   }
  // }

  render() {
    return (
      <Image source={require('../../images/background.jpg')}
        style={styles.background}>

        <ListView contentContainerStyle={styles.list}
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return (
              <View style={styles.item}>
                <Image style={styles.image} source={{uri: rowData.image_url}}/>
                <View style={styles.bottomBox}><Text style={styles.title}>{rowData.title}</Text></View>
              </View>
            );
          }}
        />

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 64
  },
  item: {
    backgroundColor: 'rgba(28, 28, 40, .75)',
    width: width / 2,
    height: width / 2,
  },
  image:{
    height: 150,
  },
  bottomBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: 'rgba(28, 28, 40, 1)'
  },
  title:{
    padding: 2,
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  background: {
    width: width,
    height: height,
    paddingBottom: 49,
  }
});

export default popular;
