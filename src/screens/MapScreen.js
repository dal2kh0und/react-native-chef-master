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


// dimension for map
var {width, height} = Dimensions.get('window');


export default class MapScreen extends Component {

  // hide navigation bar
  static navigatorStyle = {
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state ={
      region: {
        latitude: 13.764884,
        longitude: 100.538265,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      markers:[
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
  }

  onRegionChange(region) {
    this.setState({region});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          mapType="standard"
          showsUserLocation={true}
          followsUserLocation={true}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
        {this.state.markers.map((marker, i) => (
          <MapView.Marker
            key={i}
            coordinate={marker.latlng}
            image={marker.image}
            title={marker.title}
            description={marker.description}>
            <MapView.Callout>
              <View style={styles.callout}>
                <Image style={styles.calloutPhoto}
                  source={marker.photo}/>
                <Text style={styles.calloutTitle}>
                  {marker.title}
                </Text>
                <Text>{marker.description}</Text>
              </View>
            </MapView.Callout>
          </MapView.Marker>
        ))}
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
    height: height
  },
  button: {
    alignItems: 'center'
  },
  callout: {
    flex: 1,
    padding: 10,
    marginBottom: 10
  },
  calloutPhoto: {
    flex: 1,
    width: 166,
    height: 83
  },
  calloutTitle: {
    fontSize: 16
  }
});

