import React, { Component } from 'react';
import { Platform, StyleSheet, SectionList, View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Main</Text>
        <Button
          title="Go Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}