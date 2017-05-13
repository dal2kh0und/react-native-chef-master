import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class LocationButton extends Component {
  render(){
    return (
      <TouchableOpacity style={styles.button} onPress={()=>
        this.props.moveMaptoLocation(this.props.marker.latlng, this.props.name)}>
        <Text style={styles.text}>{this.props.marker.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    flexDirection: 'row',
    width: width,
    height: 45,
    backgroundColor: '#ff9900',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
});
