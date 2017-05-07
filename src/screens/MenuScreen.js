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
  ListView
} from 'react-native';


var {width, height} = Dimensions.get('window');

class MenuScreen extends Component {


  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
    //navBarBackgroundColor: 'rgba(28, 28, 40, 1)',
    // navBarTextColor: 'white',
    // navBarButtonColor: 'darkgray',

    // statu bar
    statusBarTextColorScheme: 'light',
  };

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Appetizer', 'Bread','Breakfast', 'Dessert','Drinks', 'Fruit','Meat', 'Pasta','Poultry','Salad','Seafood','Side disk','Soup']),
    };
  }


  render() {
    return (
      <Image source={require('../images/background.jpg')}
        style={styles.background}>
        <ScrollView style={styles.list}>

          <TouchableOpacity onPress={this.onPushPopular.bind(this)} >
          <View style={styles.header}>

          </View>
          </TouchableOpacity>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={{color: 'white'}}>{rowData}</Text>}/>

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
  header: {
    flex: 1,
    backgroundColor: 'red',
    height: 200
  }
});

export default MenuScreen;
