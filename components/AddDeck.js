import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { green, white, black } from '../utils/colors';

class AddDeck extends Component {
  render() { 
    return (
      <View style={{ marginTop: 100 }}>
      <TextInput
        style={styles.formControl}
        placeholder="Enter new deck name..."
        placeholderTextColor={black}
      />
        
        <TouchableOpacity style={styles.addDeckBtn}>
          <Text style={styles.addDeckText}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default AddDeck;

const styles = StyleSheet.create({
  addDeckBtn: {
    backgroundColor: green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    width: 250,
    alignSelf: 'center',
  },
  addDeckText: {
    fontSize: 30,
    color: white,
    fontWeight: 'bold'
  },
  formControl: {
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
  }
})





