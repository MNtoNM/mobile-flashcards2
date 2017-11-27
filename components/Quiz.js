import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import { gray, white, green, red } from '../utils/colors';

class Quiz extends Component {
  state = {
    view: 'question',
    score: null,
    questionNum: null
  }

  componentDidMount() {

  }

  render() {
    const deckName = this.props.navigation.state.params.deckId
    switch(this.state.view) {
      case 'question':
        return (
          <View>
            <View>
              <Text>{deckName} Quiz</Text>
              <Text style={styles.questionHeader}>QUESTION</Text>
              <Text style={styles.questionBody}>Question Body Goes Here blah blah blah blah blah</Text>

              <TouchableOpacity style={[styles.button, { 'backgroundColor': green }]}>
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, { 'backgroundColor': red }]}>
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ view: 'answer' })}
                style={[styles.button, { 'backgroundColor': gray} ]}>
                <Text style={styles.buttonText}>View Answer</Text>
              </TouchableOpacity>
            </View>


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
          <View>
            <View>
              <Text>{deckName} Quiz</Text>
              <Text style={styles.questionHeader}>ANSWER</Text>
              <Text style={styles.questionBody}>Answer Body Goes Here blah blah blah blah blah</Text>

              <TouchableOpacity style={[styles.button, { 'backgroundColor': green }]}>
                <Text style={styles.buttonText}>Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, { 'backgroundColor': red }]}>
                <Text style={styles.buttonText}>Incorrect</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.setState({ view: 'question' })}
                style={[styles.button, { 'backgroundColor': gray} ]}>
                <Text style={styles.buttonText}>View Question</Text>
              </TouchableOpacity>
            </View>


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
