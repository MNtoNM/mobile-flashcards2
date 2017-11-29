import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { red, green, gray, white } from '../utils/colors';

const Answer = ({ answer, deckName, toggleCardSide }) => (
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
        onPress={() => this.props.toggleCardSide}
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

export default Answer;
