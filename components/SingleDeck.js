import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { gray, green, white, red } from '../utils/colors';

class SingleDeck extends Component {
  state = {
    deckName: "",
    questions: []
  }
  componentDidMount() {
    const deckName = this.props.navigation.state.params.deckId
    this.setState({ deckName });

    AsyncStorage.getItem('MobileFlashcards:decks')
    .then(decks => JSON.parse(decks))
    // .then(decks => console.log(decks))
    .then(questions => questions[deckName])
    // .then(questions => console.log(questions))
    .then(questions => this.setState({ questions }))
  }

  render() {
    const questions = this.state.questions.questions
    if(questions) {
      var length = questions.length
    } else {
      var length = 0
    }

    return (
      <View>
        <Text style={styles.deckName}>{this.state.deckName}</Text>
        <Text style={styles.numQuestions}> NUMBER OF CARDS: {length} </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { deckId: this.state.deckName }
          )}
          style={[styles.button, { 'backgroundColor': green } ]}>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => this.props.navigation.navigate(
          'AddQuestion',
          { deckId : this.state.deckName}
        )}
          style={[styles.button, { 'backgroundColor': red }]}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(questions)}</Text>
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
  deckName: {
    fontSize: 30,
    alignSelf: 'center',
  },
  numQuestions: {
    fontSize: 20,
    alignSelf: 'center',
  }
})


export default SingleDeck
