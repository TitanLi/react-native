import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View>
        <Text style={styles.red}>Hello my style</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  red:{
    color:'red'
  }
});