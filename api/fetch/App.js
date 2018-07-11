import React, { Component } from 'react';
import { Platform, StyleSheet, SectionList, View, Text } from 'react-native';

/*
  fetch 可以對REST API發出請求
*/

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };

    let apple = async () => {
      let data = await fetch('https://titan-react-native.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstParam: 'yourValue',
          secondParam: 'yourOtherValue',
        })
      })
      .then((response) => response.json());

      this.setState({ number: data.apple});
    }
    //call API取值
    setInterval(() => {
      apple();
    }, 3000);
  }

  render() {
    let number = this.state.number;
    return (
      <Text style={{ fontSize: 16, textAlign: 'center' }}>{number}</Text>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
        <Api />
      </View>
    );
  }
}