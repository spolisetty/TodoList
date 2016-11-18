import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        {
          this.props.todos.map( (item, index) => {
            return <Text key={index}>
              {item}
            </Text>
          }
        )}
      </ScrollView>
    );
  }
}
