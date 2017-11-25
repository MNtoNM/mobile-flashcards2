import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { List, ListItem } from 'react-native-elements';
import * as API from './utils/api';
import initialDeck from './utils/dummy_data';
import { AsyncStorage } from 'react-native'
// import { storeInitialData } from './utils/api';

import Home from './components/Home';
import AddQuestion from './components/AddQuestion';
import AddDeck from './components/AddDeck';
import SingleDeck from './components/SingleDeck';
import Quiz from './components/Quiz';

export class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}
export default App

export const Stack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Mobile Flashcards'
    }
  },
  SingleDeck: {
    screen: SingleDeck,
    navigationOptions: {
      title: '(Single Deck)'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz Yourself'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Create New Deck'
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title: 'Add Card to Deck'
    }
  }
})