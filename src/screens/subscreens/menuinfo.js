/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 // menu
 //<TouchableOpacity style={styles.button} onPress={() => Linking.openURL(this.props.source_url)}>

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
  TouchableHighlight,
  Linking
} from 'react-native';

import api from '../../api/api.js';

var {width, height} = Dimensions.get('window');


class menuinfo extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    //navBarBlur: true,
    navBarTranslucent: true,
    statusBarTextColorScheme: 'light',
  };

  constructor(props) {
    super(props);
    this.state = {};
    api.view(this.props.recipe_id).then((data) => {
      this.setState(data);
    });
  }

  componentDidMount() {
  var url = Linking.getInitialURL().then((url) => {
    if (url) {
      console.log('Initial url is: ' + url);
    }
  }).catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <Image source={require('../../images/background.jpg')}
        style={styles.background}>

        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.image} source={{uri: this.props.image_url}}/>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{this.props.title}</Text>

            <View style={styles.line}/>

            <Text style={styles.subtitle}>Ingredient:{'\n'}{'\n'}1. .....{'\n'}2. ......{'\n'}3. .....</Text>

            <TouchableOpacity style={styles.button} onPress={() => this.props.navigator.push({
              screen: "chef.webview",
              title: this.props.title,
              passProps:{source_url: this.props.source_url} })}>
              <Text style={styles.buttonText}>START COOKING</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    width: width,
    height: 300,
    alignItems: 'center'
  },
  image: {
    width: width,
    height: 300,
    resizeMode:'stretch',
  },
  content: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, .8)',
  },
  title:{
    fontSize: 30,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    alignSelf: 'center',
  },
  subtitle: {
    paddingLeft: 15,
    fontSize: 20,
    fontFamily: 'Avenir Next',
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#ff9900',
    margin: 20
  },
  button: {
    marginTop: 20,
    width: width,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff9900'
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'brown',
    fontFamily: 'Avenir Next'
  }
});

export default menuinfo;
