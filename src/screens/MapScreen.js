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
          title: "Victory Monument", description: "A large military monument."}
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
    }, 2000);
    setTimeout(() => {
      console.log(this.refs, key);
      this.refs[key].showCallout();
    }, 1500);
  }

  render() {
    return (
      <Image source={require('../images/background.jpg')}
        style={styles.container}>
        <MapView ref="map" style={styles.map}
          region={this.state.region}
          onRegionChange={this.onRegionChange}>

          {this.state.markers.map((marker,i) => (
            <MapView.Marker
              key={i}
              ref={i}
              coordinate={marker.latlng}
              image={marker.image}
              title={marker.title}
              description={marker.description}>
            </MapView.Marker>
          ))}

        </MapView>
        <View style={styles.bar}>
          <Swiper>
          {this.state.markers.map((marker,i) => (
            <LocationButton key={i}
              name={i}
              moveMaptoLocation={this.moveMaptoLocation}
              marker={marker}/>
          ))}
          </Swiper>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height
  },
  map: {
    width: width,
    height: height/1.16,
  },
  bar: {
    width: width,
    flexDirection: 'row',
  },
  callout: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  callouttxt: {
    fontSize: 16
  },
  calloutimg: {
    alignSelf: 'center',
    width: 166,
    height: 83
  }
});
