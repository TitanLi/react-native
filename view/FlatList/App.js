import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Text } from 'react-native';

/*
  FlatList 適合長列表數據，且元素可以增刪，並不會立即渲染所有元素，而是優先渲染銀幕上可見的元素
  主要有兩個參數：
    1.data：列表數據源
    2.renderItem：根據數據源逐一解析，然後設定好格式後，進行渲染
*/
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
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