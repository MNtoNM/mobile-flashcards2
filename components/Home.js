import React from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-elements';
import * as API from '../utils/api';
import { green, white, gray, } from '../utils/colors';
import initialDeck from '../utils/dummy_data';

class Home extends React.Component {
  state = {
    decks: null
  }

  componentWillMount() {
    this.storeInitialData();
    // AsyncStorage.clear();

    //.then(AsyncStorage.getItem('decks').then((decks) => this.setState({ decks })) )
    // API.deckTitlesQuantities();
  }




  async storeInitialData () {
    //alert('after set: ' + JSON.stringify(initialDeck));
    try {
      const _decks = await AsyncStorage.getItem('MobileFlashcards:decks');
      if (_decks) {
        console.log(_decks);
        this.setState({ decks: JSON.parse(_decks) });
      } else {
        AsyncStorage.setItem('MobileFlashcards:decks', JSON.stringify(initialDeck));
      }
    }
    catch (e) {

    } finally {

    }
  }

  render() {
    let cards = [];
    let decks = this.state.decks;

    for (let d in decks) {
      cards.push(
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            'SingleDeck',
            { deckId : d}
          )}
          style={styles.listGroupItem} key={d}>
          <Text style={styles.deckTitle}>{d}</Text>
          <Text style={styles.deckSubtitle}>{decks[d].questions.length} Cards</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View>
        <Text style={{ alignSelf: 'center' }}>Select a deck below:</Text>
        <View>
          { cards }
        </View>



        <TouchableOpacity style={styles.addDeckBtn} onPress={() => this.props.navigation.navigate('AddDeck')}>
          <Text style={styles.addDeckText}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  addDeckBtn: {
    backgroundColor: green,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    width: 250,
    alignSelf: 'center',
  },
  addDeckText: {
    fontSize: 30,
    color: white,
    fontWeight: 'bold'
  },
  homeHeaderBg: {
    backgroundColor: gray,
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
  },
  homeHeaderText: {
    color: white,
    fontSize: 30,
  },
  deckTitle: {
    fontSize: 30,
    marginTop: 10,
  },
  deckSubtitle: {
    fontSize: 18,
  },
  listGroupItem: {
    borderBottomWidth: 1,

    paddingLeft: 10,
    justifyContent: 'flex-start'
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
})
