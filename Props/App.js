import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Name extends Component{
  render(){
    return(
      <Text>Hello {this.props.name} !</Text>
    );
  }
}

export default class App extends Component{
  render(){
    return(
      <View style={{alignItems:'center'}}>
        <Name name='Titan'/>
        <Name name='Apple'/>
      </View>
    )
  }
}