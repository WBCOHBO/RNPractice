import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
} from 'react-native';
import ButtonSample from './ButtonSample';

export default (props) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const dataSource = ds.cloneWithRows([
    'Button1', 'Button2', 'Button3', 'Button4'
  ]);
  return (
    <View style={styles.center}>
      <ListView
        dataSource={dataSource}
        renderRow={(rowData) => <ButtonSample buttonText={rowData} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#00FA9A',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
