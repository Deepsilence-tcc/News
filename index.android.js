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
    Navigator
} from 'react-native';
class Teacher extends Component {


  
  render() {
    return (
        <Navigator
        initialRoute={}
        >

        </Navigator>
    );
  }
}
AppRegistry.registerComponent('Teacher', () => Teacher);
