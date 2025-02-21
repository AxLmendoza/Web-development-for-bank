import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, Text, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import { getLatestGames } from './lib/metacritic';
import Constants from 'expo-constants';

const icon = require('./assets/icon.png');

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.descripcion}>{game.descripcion}</Text>
          <Text style={styles.score}>{game.score}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 12,
  },

  card: {
    marginBottom: 42,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#fff',
  },  
  descripcion: {
    fontSize: 12, 
    color: '#fff',
  },
  score: {  
    fontSize: 20, 
    fontWeight : 'bold',
    color: 'green',
    marginBottom: 10,
  },
});
// Componesnts are the building blocks of a React Native app. They are similar to HTML elements in web development.
// In this app, we have used the following components: