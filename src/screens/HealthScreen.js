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
  Navigator,
  TouchableHighlight
} from 'react-native';
import api from '../api/api.js';
import RowHealthScreen from './RowHealthScreen.js';
import InfoHealthScreen from './InfoHealthScreen.js';


const routes = [
  {
    index: 0
  }, {
    index: 1
  }
]

export default class HealthScreen extends Component {

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
      <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={
            (route, navigator) => {
              switch (route.index) {
                case 0: return (<RowHealthScreen navigator={navigator} /*route={routes[route.index]}*/ {...route.passProps}></RowHealthScreen>);
                case 1: return (<InfoHealthScreen navigator={navigator} /*route={routes[route.index]}*/ {...route.passProps}></InfoHealthScreen>);
              }
            }
          }
          configureScene={
            (route, routeStack) =>
              Navigator.SceneConfigs.FloatFromBottom
          }
          navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) => {
                 if (route.index == 0){
                   return null;
                 }
                 return (
                   <TouchableOpacity onPress={()=>navigator.pop()}>
                     <Text style={[styles.navigationBarText, {justifyContent:'flex-end'}]}>X</Text>
                   </TouchableOpacity>
                 )
               },
               RightButton: (route, navigator, index, navState) => { return null; },
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={[styles.navigationBarText, styles.titleText]}>{routes[route.index].title}</Text>); },
             }}

           />
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
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
  navigationBarText:{
    padding: 10,
    fontSize: 15
  }
});
