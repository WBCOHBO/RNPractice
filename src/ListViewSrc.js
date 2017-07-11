import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Image,
} from 'react-native';
import ButtonSample from './ButtonSample';

export default (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const dataSource = ds.cloneWithRows([
    '甄健壯 \n 2017/05/15 15:10來看過您的資料', '賽德克巴萊.賽萊克 \n2017/05/15 15:10來看過您的資料'
  ]);
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <ButtonSample buttonText={rowData} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     paddingTop: 10,
//   },
  button: {
    margin: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

