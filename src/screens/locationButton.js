import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';

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
    width: 80,
    height: 80,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    backgroundColor: 'lightgray',
    borderColor: 'black',
  },
  text: {
    textAlign: 'center'
  }
});
