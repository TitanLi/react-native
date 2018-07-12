import React, { Component } from 'react';
import { Platform, StyleSheet, SectionList, View, Text, Button } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Hello</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36
  }
})