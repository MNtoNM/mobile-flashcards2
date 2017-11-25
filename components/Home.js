import React from 'react';
import { StyleSheet } from 'react-native';
import { AsyncStorage, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-elements';
import * as API from '../utils/api';
import { green, white, gray, } from '../utils/colors';

class Home extends React.Component {
  state = {
    decks: null
  }
  
  componentDidMount() {
    API.storeInitialData()
    .then(AsyncStorage.getItem('decks').then((decks) => this.setState({ decks })) )
    // API.deckTitlesQuantities();
  }
  
  renderDeckTitles({ item, index }) {
    return <Text>{item}</Text>;
  }
  
  render() {
    return (
      <View>
        <Text style={{ alignSelf: 'center' }}>Select a deck below:</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SingleDeck')}>
          <View style={styles.listGroupItem}>
            <Text style={styles.deckTitle}>Dummy Deck</Text>
            <Text style={styles.deckSubtitle}>420 Cards</Text>
          </View>
        </TouchableOpacity>
      
      <Text>{JSON.stringify(this.state.decks)}</Text>

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

