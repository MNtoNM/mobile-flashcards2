import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { white, gray, green, red } from '../utils/colors';

const Question = ({ question, deckName, currentQuestion, questionsArray, score, next, toggleCard }) => (
  <View>
    <View>
      <Text>{deckName} Quiz</Text>

      <Text style={styles.questionHeader}>#{currentQuestion + 1}</Text>
      <Text style={{ 'alignSelf': 'center'}}>{questionsArray.length - currentQuestion} Remaining</Text>
      <Text style={{ 'alignSelf': 'center'}}>Correct so far: {score} </Text>

      <Text style={styles.questionHeader}>QUESTION</Text>

      <Text style={styles.questionBody}>{console.log("YO! -->", questionsArray[currentQuestion].question)}</Text>


      <TouchableOpacity
        onPress={() => next(1)}
        style={[styles.button, { 'backgroundColor': green }]}>
        <Text style={styles.buttonText}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { 'backgroundColor': red }]}>
        <Text style={styles.buttonText}>Incorrect</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleCard}
        style={[styles.button, { 'backgroundColor': gray } ]}
      >
        <Text style={styles.buttonText}>View Answer</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 30,
    color: white,
    fontWeight: 'bold',
  },
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
  questionHeader: {
    alignSelf: 'center',
    fontSize: 30,
  },
  questionBody: {
    marginTop: 20,
    fontSize: 20,
    alignSelf: 'center',
    width: 300,
    marginBottom: 20,
  }
})

export default Question;
