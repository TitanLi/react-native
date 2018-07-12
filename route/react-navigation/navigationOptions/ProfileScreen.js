import React, { Component } from 'react';
import { Platform, StyleSheet, Button, View, Text } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Profile</Text>
        <Button
          title="Go Main"
          onPress={() => this.props.navigation.navigate('Main')}
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