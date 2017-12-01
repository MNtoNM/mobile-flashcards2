import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { red, green, gray, white } from '../utils/colors';

const Answer = ({ deckName, toggleCard, questionsArray, currentQuestion, score, nextQuestion }) => (
  <View>
    <View>
      <Text>{deckName} Quiz</Text>
      <Text style={styles.questionHeader}>#{currentQuestion + 1}</Text>
      <Text style={{ 'alignSelf': 'center'}}>{questionsArray.length - currentQuestion} Remaining</Text>
      <Text style={{ 'alignSelf': 'center'}}>Correct so far: {score} </Text>


      <Text style={styles.questionHeader}>ANSWER</Text>
      <Text style={styles.questionBody}>{questionsArray[currentQuestion].answer}</Text>


      <TouchableOpacity
        onPress={() => nextQuestion(1)}
        style={[styles.button, { 'backgroundColor': green }]}>
        <Text style={styles.buttonText}>Correct</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => nextQuestion(0)}
        style={[styles.button, { 'backgroundColor': red }]}>
        <Text style={styles.buttonText}>Incorrect</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={toggleCard}
        style={[styles.button, { 'backgroundColor': gray} ]}>
        <Text style={styles.buttonText}>View Question</Text>
      </TouchableOpacity>
    </View>
  </View>
)

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
    marginBottom: 20,
  }
})

export default Answer;
