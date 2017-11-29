import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';
import { white, green, black } from '../utils/colors';

class AddQuestion extends Component {

  state = {
    currentDeck: this.props.navigation.state.params.deckId,
    question: "",
    answer: ''
  }

  // fetchExistingQuestions() {
  //   return AsyncStorage.getItem('MobileFlashcards:decks')
  //   .then(results => console.log("FROM ASYNC --> ", results))
  //   .then(results => { return JSON.parse(results) })
  // }

  async addNewQuestion(){
    try {
    // console.log("CURRENT DECK -->", this.state.currentDeck)
    const thisDeck = this.state.currentDeck
    const origDataString = await AsyncStorage.getItem('MobileFlashcards:decks');//this.fetchExistingQuestions();
    // console.log(`FROM ASYNC ${origDataString}`);
    const origDataObject = JSON.parse(origDataString);
    console.log("ORIGINAL DATA OBJECT --> ", origDataObject)
    const specificDeck = origDataObject[thisDeck]; //contains "questions" key
    // console.log("SPECIFICDECK: ", specificDeck)
    // console.log("QUESTIONTEST--> ", specificDeck.questions[0].question);
    let _questions = specificDeck.questions;//.push({
    const newCard = {
      'question': this.state.question,
      'answer': this.state.answer,
    };
    // console.log("_questions before push --> ", _questions)
    // console.log("newCard object before push --> ", newCard)
    const _newQuestions = _questions.concat(newCard);
    // console.log("UPDATED QUESTIONS ARRAY -->", _newQuestions);
    // console.log("OrigDataObject AFTER new question concatted to previous questions", origDataObject[thisDeck])
    const newSpecificDeck = {
      ["questions"]: _newQuestions, ["title"]: thisDeck
    }
    // console.log("NEW SPECIFICDECK --> ", newSpecificDeck)
    origDataObject[thisDeck] = newSpecificDeck
    // console.log("Updated Data Object --> ", origDataObject)
    const finalObj = origDataObject
    const finalString = JSON.stringify(finalObj)
    AsyncStorage.setItem('MobileFlashcards:decks', finalString)

    this.props.navigation.navigate('Home')

  } catch (error) {
      console.log(error);
    }

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
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />

        <TextInput
          style={styles.formControl}
          placeholder="Enter new answer.."
          placeholderTextColor={black}
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
        />

        <Button
          onPress={this.addNewQuestion.bind(this)}
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
