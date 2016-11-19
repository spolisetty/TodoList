import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // height: 40,
    // flex: 1,
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 1
  },
  textStyle: {
    color: 'black',
    fontSize: 10,
    padding: 15
  },
  removeIcon: {
    position: 'absolute',
    right: 15,
    top: 9
  },
  removeText: {
    color: 'red',
    fontSize: 20,
  },
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
            return  <View style={styles.container} key={index}>
                      <Text style={styles.textStyle}>
                        {item}
                      </Text>
                      <Checkbox />
                      <TouchableOpacity style={styles.removeIcon} onPress={() => this.props.onRemoveItem(index)}>
                        <Text style={styles.removeText}>
                          &times;
                        </Text>
                      </TouchableOpacity>
                    </View>
          }
        )}
      </ScrollView>
    );
  }
}
