import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
import Menu from './Menu';
import Map from './Map';

export default class App extends Component {
  constructor() {
    super();

  }


  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <Map />
        <Menu />
      </View>
    );
  }
}
