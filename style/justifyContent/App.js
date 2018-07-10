import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//justifyContent可以決定子元素沿著主軸的排列方式，分為：flex-start、center、flex-end、space-around以及space-between
//flex-start靠左上對齊，子元件之間不留距離
//center靠左置中對齊，子元件之間不留距離
//flex-end靠左下對齊，子元件之間不留距離
//space-around靠左平均分散置中對齊，子元件之間會留距離
//space-between靠左平均分散對齊，子元件之間會留距離
export default class App extends Component{
  render(){
    return(
      <View style={styles.view1}>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
        <View style={styles.view4}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  view2:{
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  view3:{
    width: 50,
    height: 50,
    backgroundColor: 'skyblue'
  },
  view4:{
    width: 50,
    height: 50,
    backgroundColor: 'steelblue'
  }
});