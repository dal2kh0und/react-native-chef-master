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
  ListView,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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

          <TouchableHighlight onPress={this.onPushPopular.bind(this)} underlayColor='#ff9900'>
            <Image style={styles.pop}source={require('../images/popback.jpg')}>
              <Text style={styles.popText}>Popular recipes!!</Text>
              <Text style={styles.here}>HERE</Text>
            </Image>
          </TouchableHighlight>

          <ListView style={styles.content}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableOpacity onPress={()=> this.props.navigator.push({
                screen: "chef.menudata",
                title: rowData,
                passProps:{rowData} })}>
              <View style={styles.row}>
                <View style={{flex: 12}}>
                  <Text style={styles.text}>{rowData}</Text>
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
  content: {
    //backgroundColor: 'red',

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

export default MenuScreen;
