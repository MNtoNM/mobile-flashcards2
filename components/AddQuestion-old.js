import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, AsyncStorage } from 'react-native';
import { white, green, black } from '../utils/colors';

class AddQuestion extends Component {

  state = {
    currentDeck: this.props.navigation.state.params.deckId,
    question: "",
    answer: ''
  }

  fetchExistingQuestions() {
     return AsyncStorage.getItem('MobileFlashcards:decks')
    .then(results => console.log("FROM ASYNC --> ", results))
    // .then(results => JSON.parse(results))
    // .then(results => console.log("PARSED --> ", results))
    .then(results => {
      return JSON.parse(results);
      //return parseData[this.state.currentDeck]
    })
    //.then(results => console.log("Current Deck --> ", results))
    //.then(results => results.questions)
    //.then(results => console.log("Questions --> ", results))
  }

  async addNewQuestion(){

    try {
    const old = await AsyncStorage.getItem('MobileFlashcards:decks');//this.fetchExistingQuestions();
    console.log(`FROM ASYNC ${old}`);
    const parseData = JSON.parse(old);
    const jsDeck = parseData["JavaScript"];
    console.log(jsDeck.questions[0].question);
    const _questions = jsDeck.questions;//.push({
    const newCard = {
      'question': this.state.question,
      'answer': this.state.answer,
    };
    _questions.push(newCard);
    console.log(JSON.stringify(_questions));

  } catch (e) {
    console.log(e)
;  } finally {

  }

    //console.log()
    //parseData[this.state.currentDeck]
    // const newData = {
    //   [this.state.currentDeck]: {
    //     'questions': [
    //       old,
    //       {
    //         'question': this.state.question,
    //         'answer': this.state.answer,
    //       }
    //     ],
    //   }
    // }
    // const objString = JSON.stringify(jsDeck);
    // console.log(`TO ASYNC ${objString}`);
    // AsyncStorage.mergeItem('MobileFlashcards:decks', objString)
    // .then(result => {
    //   console.log(result);
    //   this.props.navigation.navigate('Home');
    // })

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
