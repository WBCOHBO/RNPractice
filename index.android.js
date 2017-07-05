/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// rowHasChange.catch(function() {});
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

// ListView
class MyComponent extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state ={
      daaSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>} />
    );
  }
}

// text
export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <MyComponent text='I love to blink' />
        <MyComponent text='Yes blinking is so great' />
        <MyComponent text='Why did they ever take this out of HTML' />
        <MyComponent text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});



AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
