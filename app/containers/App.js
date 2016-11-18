import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Input from '../components/Input'

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
  items: state.items,
})

let items = [ 'a', 'b', 'c'];

class App extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <Input/>
        <ScrollView style={styles.scrollContainer}>
          {
            items.map( (item, index) => {
              return <Text key={index}>
                {item}
              </Text>
            }
          )}
        </ScrollView>
        <Footer/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
