import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

export default (props) => (
  // console.log("!!!!!!!", props)
  // return (
  <View style={{flex: 1}}>
    <TouchableOpacity style={styles.button}>
      <Image style={{width: 50, height: 50,borderRadius: 30}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
      />
      <View>
      <Text style={styles.title}>{props.buttonText.title}</Text>
      <Text style={styles.desc}>{props.buttonText.desc}</Text>
      </View>
      <Image style={{ width: 30, height: 30,top:15,left:380,position: 'absolute',}}
          source={{uri: 'https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-4/128/cross-128.png'}}
      />
    </TouchableOpacity>
  </View>
// );
);


const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'row',
  },
  // image:{

  // },
   button: {
    flexDirection: 'row',
    margin: 3,
    paddingTop: 10,
    paddingBottom: 10,
    // paddingLeft: 15,
    paddingRight:15,
     backgroundColor: 'white',
    // borderRadius: 9,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
   },
  title: {
    flexDirection: 'column',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    // paddingRight:550,
    // backgroundColor:'black',
  },
  desc:{
    flexDirection: 'column',
    color: 'gray',
    fontSize: 18,
    paddingLeft: 20,
  }
});