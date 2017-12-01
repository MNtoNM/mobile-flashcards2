import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { white, green, gray, black } from '../utils/colors';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Result extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification())
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.props.deckName} Quiz</Text>
          <Text style={styles.header}>YOUR SCORE:</Text>

          <Text style={{ alignSelf: 'center' }}>You Got {this.props.score} out of {this.props.questionsArray.length} , or </Text>
          <Text style={styles.score}>{this.props.calculateScore()}%</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              { deckId: this.props.deckName}
            )}
            style={[styles.button, { backgroundColor: green }]}>
            <Text style={styles.buttonText}>Go Again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(
              'SingleDeck',
              { deckId : this.props.deckName}
            )}
            style={[styles.button, { backgroundColor: black }]}>
            <Text style={styles.buttonText}>Top of Deck</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={[styles.button, { backgroundColor: gray }]}>
            <Text style={styles.buttonText}>See All Decks</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    fontSize: 40,
    alignSelf: 'center',
  },
  score: {
    fontSize: 60,
    alignSelf: 'center',
    color: black,
  },
})

export default Result;
