// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// // rowHasChange.catch(function() {});
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   ListView
// } from 'react-native';

// // ListView
// class MyComponent extends Component {
//   constructor() {
//     super();
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state ={
//       daaSource: ds.cloneWithRows(['row 1', 'row 2']),
//     };
//   }

//   render(){
//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={(rowData) => <Text>{rowData}</Text>} />
//     );
//   }
// }

// // text
// // export default class AwesomeProject extends Component {
// //   render() {
// //     return (
// //       <View>
// //         <MyComponent text='I love to blink' />
// //         <MyComponent text='Yes blinking is so great' />
// //         <MyComponent text='Why did they ever take this out of HTML' />
// //         <MyComponent text='Look at me look at me look at me' />
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// // baseText: {
// //     fontFamily: 'Cochin',
// //   },
// //   titleText: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// // });



// // AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {

  item = (props) => {
    return  <Text style={styles.item}>{props.item.key}</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '123'},
            {key: '312'},
            {key: 'bbb'},
            {key: 'aaa'},
            {key: 'qqq'},
            {key: 'ddd'},
            {key: 'fff'},
            {key: 'zzz'},
          ]}
          renderItem={this.item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);
