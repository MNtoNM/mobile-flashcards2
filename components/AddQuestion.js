import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { white, green, black } from '../utils/colors';

class AddQuestion extends Component {
  render() {
    const currentDeck = this.props.navigation.state.params.deckId
    return (
      <View style={[ styles.container, { marginTop: 100 }]}>
      <Text style={{ fontSize: 20, alignSelf: 'center' }}>Add new card to {currentDeck} deck:</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter new question.."
          placeholderTextColor={black}
        />
        <TextInput
          style={styles.formControl}
          placeholder="Enter new answer.."
          placeholderTextColor={black}
        />
        <TouchableOpacity>
          <View style={[styles.button, { backgroundColor: green }]}>
            <Text style={styles.buttonText}>Create Card</Text>
          </View>
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
    width: 250,
    height: 60,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    color: white,
    fontWeight: 'bold'
  },
  formControl: {
    alignSelf: 'center',
    width: 300,
    marginTop: 20,
  },
  container: {
    width: 300,
    alignSelf: 'center',
  }
})

export default AddQuestion;
