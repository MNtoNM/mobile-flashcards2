import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { white, gray, green, red } from '../utils/colors';

const Question = ({ question, deckName, toggleCardSide }) => (
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
        onPress={this.props.toggleCardSide}
        style={[styles.button, { 'backgroundColor': gray} ]}>
        <Text style={styles.buttonText}>View Answer</Text>
      </TouchableOpacity>
    </View>


  </View>
);

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


export default Question;
