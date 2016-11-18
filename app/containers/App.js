import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'
import List from '../components/List'

import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})

const mapStateToProps = (state) => ({
  todos: state.todos,
})

// let items = [ 'a', 'b', 'c'];

class App extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  onSubmit = (item) => {
    this.props.dispatch(actionCreators.addItem(item));
  }

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <Input placeholder='Enter an item!' onSubmit={this.onSubmit}/>
        <List todos={this.props.todos} />
        <Footer/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
