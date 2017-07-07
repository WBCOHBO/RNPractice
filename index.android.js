import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button,ListView} from 'react-native';
import ListViewSrc from './src/ListViewSrc';

export default class AwesomeProject extends Component {
  render() {
    return (
    <View style={{ flex: 1 }}>
      <ListViewSrc />
    </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
