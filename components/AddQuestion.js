import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';
import { white, green, black } from '../utils/colors';

class AddQuestion extends Component {

  state = {
    currentDeck: this.props.navigation.state.params.deckId,
    question: "",
    answer: ''
  }

  fetchExistingQuestions = async () => {
    await AsyncStorage.getItem('MobileFlashcards:decks')
    .then(results => console.log("FROM ASYNC --> ", results))
    // .then(results => JSON.parse(results))
    // .then(results => console.log("PARSED --> ", results))
    .then(results => results[this.state.currentDeck])
    .then(results => console.log("Current Deck --> ", results))
    .then(results => results.questions)
    .then(results => console.log("Questions --> ", results))
  }

  addNewQuestion = async () => {
    const old = this.fetchExistingQuestions();
    const newData = {
      [this.state.currentDeck]: {
        'questions': [
          old,
          {
            'question': this.state.question,
            'answer': this.state.answer,
          }
        ],
      }
    }
    const objString = JSON.stringify(newData)
    AsyncStorage.mergeItem('MobileFlashcards:decks', objString)
    this.props.navigation.navigate('Home')
  }

  render() {
    const currentDeck = this.props.navigation.state.params.deckId
    return (
      <View style={[ styles.container, { marginTop: 100 }]}>
      <Text style={{ fontSize: 20, alignSelf: 'center' }}>Add new card to {currentDeck} deck:</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter new question.."
          placeholderTextColor={black}
          onChangeText={(question) => this.setState({question})}

        />
        <TextInput
          style={styles.formControl}
          placeholder="Enter new answer.."
          placeholderTextColor={black}
          onChangeText={(answer) => this.setState({answer})}

        />
        <Button
          onPress={this.addNewQuestion}
          style={styles.button}
          title="Create Card">
        </Button>

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
