import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view1:{
    width:50,
    height:50,
    backgroundColor:'powderblue'
  },
  view2:{
    width:100,
    height:100,
    backgroundColor:'skyblue'
  },
  view3:{
    width:150,
    height:150,
    backgroundColor:'steelblue'
  }
});