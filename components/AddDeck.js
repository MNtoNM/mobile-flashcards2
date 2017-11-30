import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, AsyncStorage, Button } from 'react-native';
import { green, white, black } from '../utils/colors';

class AddDeck extends Component {

  state = {
    deckName: ""
  }

  addDeck = async() => {
    const newDeck = {
      [this.state.deckName]: {
        'questions': [],
        'title': this.state.deckName
      }
    }
    const objString = JSON.stringify(newDeck)
    AsyncStorage.mergeItem('MobileFlashcards:decks', objString)
    this.props.navigation.navigate(
      'SingleDeck',
      { deckId: this.state.deckName}
    )
  }

  render() {
    return (
      <View style={{ marginTop: 100 }}>
      <TextInput
        style={styles.formControl}
        placeholder="Enter new deck name..."
        placeholderTextColor={black}
        value={this.state.deckName}
        onChangeText={(deckName) => this.setState( {deckName} )}
      />

        <Button
          title="Create Deck"
          onPress={this.addDeck}
          style={styles.addDeckBtn}>
        </Button>

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
