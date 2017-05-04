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
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';


var {width, height} = Dimensions.get('window');


export default class MainScreen extends Component {

  // hide navigation bar
  static navigatorStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light'
  };

  render() {
    return (
      <Image source={require('../images/background.jpg')}
        style={styles.background}>
        <ScrollView style={styles.container}>

          <View style={styles.main}>
            <Swiper style={styles.swiper} height={350} activeDotColor={'#ff9900'} autoplay>
              <View style={styles.slide1}>
              <Image resizeMode='contain' source={require('../images/title.jpg')} style={{flex: 1}}>
                <Text style={styles.maintitle}>Cooking is easy!!</Text>
              </Image>
              </View>
              <View style={styles.slide2}>
                <Image resizeMode='contain' source={require('../images/sweet.jpg')} style={{flex: 1}}>
                  <Text style={styles.maintitle}>Cooking is easy!!</Text>
                </Image>
              </View>
              <View style={styles.slide3}>
              <Image resizeMode='contain' source={require('../images/restaurant.jpg')} style={{flex: 1}}>
                <Text style={styles.maintitle}>Cooking is easy!!</Text>
              </Image>
              </View>
            </Swiper>
          </View>

          <View style={styles.submain}>

            <TouchableOpacity style={styles.menu1}>
              <View style={styles.submenu1}>
                <Icon name="ios-restaurant" size={50} color={'gray'}/>
                <Text style={{color: 'white', textAlign:'center'}}>Recommend!!</Text>
              </View>
              <Image source={require('../images/foodmain.jpg')} style={styles.submenu2}/>
            </TouchableOpacity>

            <View style={styles.menu2}>
              <View style={styles.submenu3}>
                <Image resizeMode='stretch' style={styles.submenu3} source={require('../images/carrot.jpg')}/>
              </View>
              <View style={styles.submenu4}>
                <Swiper style={styles.swiper}
                  width={width/1.5} height={150} autoplay activeDotColor={'#ff9900'} horizontal={false}>
                  <View style={styles.slide1}>
                     <Text style={styles.text}>Welcome</Text>
                  </View>
                  <View style={styles.slide2}>
                     <Text style={styles.text}>To</Text>
                  </View>
                  <View style={styles.slide3}>
                     <Text style={styles.text}>Chef</Text>
                  </View>
                </Swiper>
              </View>
            </View>

            <View style={styles.menu1}>
              <TouchableOpacity style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap'}}>
                <View style={styles.submenu1}>
                  <Icon name="ios-cafe" size={50} color={'gray'}/>
                  <Text style={{color: 'white', textAlign:'center'}}>Coffee Time</Text>
                </View>
                <Image source={require('../images/coffee.jpg')} style={styles.submenu1}/>
              </TouchableOpacity>
              <View style={styles.submenu1}>
                <Icon name="ios-bookmarks" size={50} color={'gray'}/>
                <Text style={{color: 'white', textAlign:'center'}}>Updated Menu</Text>
              </View>
            </View>

          </View>

        </ScrollView>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: width,
    height: height,
  },
  main: {
    //backgroundColor: 'red',
  },
  submain: {
    flex: 1,
    paddingBottom: 48
  },

  //submenu 1
  menu1:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  submenu1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width/3,
    height: 120,
    backgroundColor: 'rgba(28, 28, 40, .75)',
  },
  submenu2: {
    width: width/1.5,
    height: 120,
    backgroundColor: 'cyan',
    alignSelf: 'stretch',
  },

  //submenu 2
  menu2:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  submenu3: {
    width: width/3,
    height: 150,
    backgroundColor: 'pink',
  },
  submenu4: {
    width: width/1.5,
    height: 150,
    backgroundColor: 'rgba(28, 28, 40, .75)'
  },

  //swiper option
  swiper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  maintitle: {
    flex: 1,
    backgroundColor: 'rgba(28, 28, 40, .65)',
    textAlign: 'center',
    paddingTop: 150,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#393939',
    textShadowOffset: {width: 2.5, height: 2.5},
    textShadowRadius: 3
  }
});
