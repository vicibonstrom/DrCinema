import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';

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
