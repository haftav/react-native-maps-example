import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import {
  View,
  StyleSheet,
} from 'react-native';

import Menu from './Menu';
import Map from './Map';
import Profile from './Profile';

const RootStack = createStackNavigator(
  {
    Map: Map,
    Profile: Profile
  },
  {
    initialRouteName: 'Map'
  }
)

export default class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <View style={StyleSheet.absoluteFill}>
        <RootStack />
        <Menu />
      </View>
    );
  }
}


