import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, ScrollView, Image, View } from 'react-native';

/*
  ScrollView 是一個通用的可滾動容器
*/
export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Image source={require('./img/download.jpeg')} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    )
  }
}