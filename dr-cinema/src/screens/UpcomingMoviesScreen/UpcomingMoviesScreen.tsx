import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

interface UpcomingMovie {
  id: string;
  name: string;
  releaseDate: string;
  thumbnail: string;
}

const hardcodedUpcomingMovies: UpcomingMovie[] = [
  {
    id: 'u1',
    name: 'Starbound',
    releaseDate: '2024-05-10',
    thumbnail: 'https://via.placeholder.com/100'
  },
  {
    id: 'u2',
    name: 'The Final Stand',
    releaseDate: '2024-05-15',
    thumbnail: 'https://via.placeholder.com/100'
  },
  {
    id: 'u3',
    name: 'Love in Code',
    releaseDate: '2024-06-01',
    thumbnail: 'https://via.placeholder.com/100'
  }
];

const UpcomingMoviesScreen: React.FC = () => {
  // Normally you’d sort by release date here if needed
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Movies</Text>
      <FlatList
        data={hardcodedUpcomingMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.releaseDate}>Release Date: {item.releaseDate}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default UpcomingMoviesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold'
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 8
  },
  infoContainer: {
    flexShrink: 1
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  releaseDate: {
    fontSize: 14,
    color: '#555'
  }
});