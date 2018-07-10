import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

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
    flex:1
  },
  view2:{
    flex:1,
    backgroundColor:'powderblue'
  },
  view3:{
    flex:2,
    backgroundColor:'skyblue'
  },
  view4:{
    flex:3,
    backgroundColor:'steelblue'
  }
});