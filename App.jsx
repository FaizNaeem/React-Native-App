import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Login from './Screens/Login'

export default class App extends Component {
  render() {
    return (
          <View style={styles.appContainer}>
            <View style={styles.container}>
              <Login title="Form 1" />
            </View>
            <View style={styles.container}>
              <Login title="Form 2" />
            </View>
          </View>
      
    )
  }
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  form: {
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center the text
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});




