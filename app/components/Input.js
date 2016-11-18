import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 40,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    fontSize: 12
  }
})

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { item: '' };
  }

  onChangeText = (item) => {
    if( item.trim() === '') {}
    else{
      this.setState({
        item
      });
      console.log('placeholder is: ', item);
    }
  }

  onSubmitEditing = (event) => {
    if( event.nativeEvent.text.trim() === '') {
    }
    else {
      console.log("Entered the following and submitted:", event.nativeEvent.text);
      this.props.onSubmit(event.nativeEvent.text); // Prop is sent from App.js when calling Input
    }
    this.setState({item: ''});
  }

  render() {
    return (
      <TextInput
        style={styles.input}
        onChangeText={this.onChangeText}
        placeholder={this.props.placeholder}
        value={this.state.item}
        onSubmitEditing={this.onSubmitEditing}
        blurOnSubmit={false}
      />
    )
  }
}
