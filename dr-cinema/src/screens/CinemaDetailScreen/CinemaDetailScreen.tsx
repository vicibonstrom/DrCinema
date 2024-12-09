// src/screens/CinemaDetailScreen/CinemaDetailScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

interface CinemaDetailScreenProps {
  cinemaId: string;
}

const CinemaDetailScreen: React.FC<CinemaDetailScreenProps> = ({ cinemaId }) => {
  // For now, use hardcoded data based on cinemaId
  const hardcodedCinema = {
    id: cinemaId,
    name: 'Cinema Aurora',
    description: 'A classic cinema in the heart of the city.',
    address: '123 Main Street',
    city: 'Metroville',
    phone: '+1 234 567 890',
    website: 'https://aurora.example.com',
    movies: [
      {
        id: 'm1',
        name: 'The Great Adventure',
        releaseYear: 2020,
        genres: ['Action', 'Adventure'],
        thumbnail: 'https://via.placeholder.com/100'
      },
      {
        id: 'm2',
        name: 'Love in the Time of Coding',
        releaseYear: 2021,
        genres: ['Romance', 'Drama'],
        thumbnail: 'https://via.placeholder.com/100'
      }
    ]
  };

  const handleMoviePress = (movieId: string) => {
    // Navigate to Movie screen
    // Using Expo Router's `router.push`
    // Import `useRouter` from 'expo-router'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hardcodedCinema.name}</Text>
      <Text style={styles.description}>{hardcodedCinema.description}</Text>
      <Text style={styles.info}>{hardcodedCinema.address}, {hardcodedCinema.city}</Text>
      <Text style={styles.info}>Phone: {hardcodedCinema.phone}</Text>
      <Text style={styles.info}>Website: {hardcodedCinema.website}</Text>
      
      <Text style={styles.moviesTitle}>Movies Playing:</Text>
      <FlatList
        data={hardcodedCinema.movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.movieInfo}>
              <Text style={styles.movieName}>{item.name} ({item.releaseYear})</Text>
              <Text style={styles.genres}>{item.genres.join(', ')}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CinemaDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  info: {
    fontSize: 14,
    marginBottom: 4
  },
  moviesTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8
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
  movieInfo: {
    flexShrink: 1
  },
  movieName: {
    fontSize: 16,
    fontWeight: '600'
  },
  genres: {
    fontSize: 14,
    color: '#555'
  }
});