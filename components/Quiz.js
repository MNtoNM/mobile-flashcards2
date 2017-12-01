import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { gray, white, green, red } from '../utils/colors';
import Question from './Question';
import Answer from './Answer';
import Result from './Result';

class Quiz extends Component {
  state = {
    view: 'question',
    score: 0,
    currentQuestion: 0,
    questionsArray: []
  }

componentDidMount() {
  const deckName = this.props.navigation.state.params.deckId
  try {
    AsyncStorage.getItem('MobileFlashcards:decks')
    .then(results => JSON.parse(results))
    // .then(results => console.log(results))
    .then(results => results[deckName])
    .then(results =>  results.questions)
    // .then(results => console.log("q's array b4 setstate --> ", results))
    .then(results => this.setState({ questionsArray: results}))
    .then(results => console.log("QUESTIONS FROM STATE --> ", this.state.questionsArray ))
  } catch (error) {
    console.log(error)
  }
  // const decksObject = JSON.parse(decksString)
  // console.log("parsedDecks --> ", decksObject)
  }

  componentWillUnmount() {
    this.setState({ currentQuestion: 0, score: 0 })
  }

  next(points) {
    this.setState((prevState) => ({
      score: prevState.score + points,
    }))
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1
    }))
  }

  toggleCard = () => {
    if (this.state.view === 'answer') {
      this.setState({ view: 'question' })
    } else if (this.state.view === 'question') {
      this.setState({ view: 'answer' })
    }
  }

  calculateScore = () => { // round this to one decimal
    return (
      (this.state.score / this.state.questionsArray.length)
    )
  }

  render() {
    const deckName = this.props.navigation.state.params.deckId

    switch(this.state.view) {
      case 'question':
        return (

          (this.state.questionsArray) ?
          <View>
            <Question
              deckName={deckName}
              toggleCard={this.toggleCard}
              questionsArray={this.state.questionsArray}
              currentQuestion={this.state.currentQuestion}
              score={this.state.score}
              next={this.next}
            />

            <TouchableOpacity onPress={() => this.setState({ view: 'results' })}>
              <Text>Results View</Text>
            </TouchableOpacity>
          </View> : null
        )
      case 'answer':
        return (
          <Answer
            deckName={deckName}
            toggleCard={this.toggleCard}
            questionsArray={this.state.questionsArray}
            currentQuestion={this.state.currentQuestion}
            score={this.state.score}
            next={this.next}
          />
        )
      case 'results':
        return (
          <Result
            calculateScore={this.calculateScore}
            deckName={deckName}
            score={this.state.score}
            questionsArray={this.state.questionsArray}
            navigation={this.props.navigation}
          />
      )
    }
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
  header: {
    fontSize: 40,
    alignSelf: 'center',
  },
  score: {
    fontSize: 60,
    alignSelf: 'center',
    color: green,
  },
  questionHeader: {
    alignSelf: 'center',
    fontSize: 30,
  },
  questionBody: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    width: 300,
    marginBottom: 100,
  }
})

export default Quiz;
