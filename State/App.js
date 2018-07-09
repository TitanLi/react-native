import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };

    //每秒number加1
    setInterval(() => {
      this.setState(previousState => {
        return { number: Number(previousState.number) + 1 };
      });
    }, 1000);
  }

  render() {
    let number = this.state.number;
    return (
      <Text style={{fontSize: 36, textAlign: 'center'}}>{number}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignItems: 'center'}}>
        <Time/>
      </View>
    );
  }
}