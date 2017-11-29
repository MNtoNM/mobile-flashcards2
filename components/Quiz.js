import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { gray, white, green, red } from '../utils/colors';
import Question from './Question';
import Answer from './Answer';

class Quiz extends Component {
  state = {
    view: 'question',
    score: 0,
    questionNum: null
  }

  zeroOut() {

  }

  next(points) {
    this.setState((prevState) => ({
      score: prevState.score + points
    }))
  }

  toggleCardSide = () => {
    if (this.state.view === 'answer') {
      this.setState({ view: 'question' })
    } else if (this.state.view === 'question') {
      this.setState({ view: 'answer' })
    }
  }

  render() {
    const deckName = this.props.navigation.state.params.deckId
    switch(this.state.view) {
      case 'question':
        return (
          <View>
            <Question
              deckName={deckName}
              toggleCardSide={this.toggleCardSide}
            />

            <TouchableOpacity onPress={() => this.setState({ view: 'question' })}>
              <Text>Question View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ view: 'answer' })}>
              <Text>Answer View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({ view: 'results' })}>
              <Text>Results View</Text>
            </TouchableOpacity>


          </View>
        )
      case 'answer':
        return (
          <Answer
            deckName={deckName}
            toggleCardSide={this.toggleCardSide.bind(this)}
          />
        )
      case 'results':
        return (
          <View>
          <View>
            <Text>{deckName} Quiz</Text>
            <Text style={styles.header}>YOUR SCORE:</Text>

            <Text style={{ alignSelf: 'center' }}>You Got X out of Y, or </Text>
            <Text style={styles.score}>Z%</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={[styles.button, { backgroundColor: gray }]}>
              <Text style={styles.buttonText}>See All Decks</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({ view: 'question'}) }
              style={[styles.button, { backgroundColor: green }]}>
              <Text style={styles.buttonText}>Go Again</Text>
            </TouchableOpacity>
          </View>
        </View>
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
