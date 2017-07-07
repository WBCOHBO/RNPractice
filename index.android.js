import React, { Component } from 'react';
import ButtonSample from './src/ButtonSample';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
    <View style={{ flex: 1 }}>
      <ButtonSample />
    </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);