import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native';

// import map apis
import MapView from 'react-native-maps';
import Swiper from 'react-native-swiper';

import LocationButton from '../screens/locationButton.js';


// dimension for map
var {width, height} = Dimensions.get('window');


export default class MapScreen extends Component {

  // hide navigation bar
  static navigatorStyle = {
    navBarHidden: true,
  };

  constructor(props) {
    super(props);
    this.state ={
      toolbarHackHeight: 0,
      region: {
        latitude: 13.764884,
        longitude: 100.538265,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      markers:[
        {latlng: {latitude: 13.989045, longitude: 100.617598},
          title: "Future Park Rangsit",
          image: require('../images/shopping.png')},
        {latlng: {latitude: 13.981246, longitude: 100.550525},
          title: "7-11 Bangkradi",
          image: require('../images/shopping.png')},
        {latlng: {latitude: 13.764884, longitude: 100.538265},
          image: require('../images/attention.png'),
          photo: require('../images/Victory_Monument.jpg'),
          title: "Victory Monument", description: "A large military monument."},
        {latlng: {latitude: 13.763681, longitude: 100.538125},
          image: require('../images/music.png'),
          title: "Saxohpone Club", description: "A music club."},
        {latlng: {latitude: 13.764595, longitude: 100.537438},
          image: require('../images/shopping.png'),
          title: "Coco Department Store", description: "Fashion department."},
      ]
    };
    this.onRegionChange = this.onRegionChange.bind(this);
    this.moveMaptoLocation = this.moveMaptoLocation.bind(this);
  }

  onRegionChange(region) {
    this.setState({region});
  }

  moveMaptoLocation(latlng, key) {
    this.refs.map.animateToRegion({
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
      ...latlng,
    }, 1000);
    setTimeout(() => {
      console.log(this.refs, key);
      this.refs[key].showCallout();
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}>


        <View style={styles.bar}>

        </View>
        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height,
  },
  bar: {
    width: width,
    height: height/3,
    backgroundColor: 'white'
  }
});
