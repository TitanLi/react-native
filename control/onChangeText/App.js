import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

/*
  onChangeText 當本文變化時觸發
  onSubmitEditing 當本文被提交時觸發

  將text1保存在state中，因為text1隨時會變化
*/
export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {'text1':''};
  }
  
  render(){
    return(
      <View style={{padding:10}}>
        <TextInput
          style={{height:40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text1:text})}
        />
        <Text style={{padding:10,fontSize:42}}>
          {this.state.text1.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}