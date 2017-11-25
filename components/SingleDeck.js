import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { gray, green, white, red } from '../utils/colors';

class SingleDeck extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Quiz')}
          style={[styles.button, { 'backgroundColor': green } ]}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddQuestion')}
          style={[styles.button, { 'backgroundColor': red }]}>
          <Text style={styles.buttonText}>Add Card</Text> 
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    width: 250,
  },
  buttonText: {
    fontSize: 30,
    color: white,
    fontWeight: 'bold'
  },
})


export default SingleDeck