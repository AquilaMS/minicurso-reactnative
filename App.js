import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Repo from './components/Repo';

export default class App extends Component {
  state = {
    repos: [
      {
        id: 1,
        thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        title: 'rocketseat.com.br',
        author: 'rocketseat',
      },
      {
        id: 2,
        thumbnail: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        title: 'rocketseat.com.br',
        author: 'diego3g',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Minicurso GoNative</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} data={repo} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },
});
