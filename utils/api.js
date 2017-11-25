import initialDeck from './dummy_data';
import { AsyncStorage } from 'react-native'

// HELPER METHODS
// ______________

// IF ASYNCSTORAGE KEY IS EMPTY, LOAD INITIAL "DUMMY" DATA INTO IT
 
export const storeInitialData = async () =>  {
  if (!AsyncStorage.getItem('decks')) {
    try {
      await AsyncStorage.setItem('decks', JSON.stringify(initialDeck))
    } catch (error) {
      alert(error)
    } 
  }
}

// TODO CREATE A METHOD THAT RETURNS AN ARRAY OF OBJECTS, CONSISTING OF DECK TITLE AND NUMBER OF CARDS.
  // export const deckTitlesQuantities = async () => {
  //   try {
  //     await AsyncStorage.getItem('decks')
  //     .then()
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

// TODO CREATE A METHOD THAT TAKES IN A DECK NAME AND RETURNS AN ARRAY OF Q/A OBJECTS.

// TODO CREATE A METHOD THAT TAKES A TITLE, AND ADDS AN EMPTY DECK ON TO THE OBJECT WITH THE SAME KEYNAME.

// TODO CREATE A METHOD THAT ACCEPTS A question, ANSWER AND DECK, AND ADDS THAT question TO THE RIGHT DECK.

