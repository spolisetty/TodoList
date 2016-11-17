import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'red',
    fontSize: 10,
  }
})

export default class Footer extends Component {

  _onPressButton() {
    console.log("presssed remove");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styles.textStyle}>
            Remove completed items
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
