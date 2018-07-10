import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//alignItems可以決定子元件沿著次軸（與主軸垂直的軸）的排列方式，包含：flex-start、center、flex-end以及stretch
//flex-start貼緊起始位子，子元件之間不留距離
//center置中對齊，子元件之間不留距離
//stretch填滿，注意:需將子元件的width去掉才會生效
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
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  view2:{
    // width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  },
  view3:{
    // width: 50,
    height: 50,
    backgroundColor: 'skyblue'
  },
  view4:{
    // width: 50,
    height: 50,
    backgroundColor: 'steelblue'
  }
});