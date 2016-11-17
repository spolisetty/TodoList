import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 10,
  }
})

export default class Title extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Todo List
        </Text>
      </View>
    );
  }
}
