import React,{Component} from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button,ListView} from 'react-native';

// export default (props) => {
//     this.state = {
//         titleText: "甄健壯",
//         bodyText:"2017/05/15 15:10來看過您的資料",
//     };
//     return (
//       <Text style={styles.baseText}>
//         <Text style={styles.titleText} onPress={this.onPressTitle}>
//           {this.state.titleText}<br /><br />
//         </Text>
//         <Text numberOfLines={5}>
//           {this.state.bodyText}
//         </Text>
//       </Text>
//     );
// }

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: 'Cochin',
//   },
//   titleText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });


export default (props) => {
    <View style={{flex:1}}>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text>{props.desc}</Text>
    </View>
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});