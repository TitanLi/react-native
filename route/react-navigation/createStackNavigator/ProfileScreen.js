import React, { Component } from 'react';
import { Platform, StyleSheet, Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Hello Titan</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: 'aqua'
  }
})