// src/screens/MovieScreen/MovieScreen.tsx
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';

interface MovieScreenProps {
  movieId: string;
}

const MovieScreen: React.FC<MovieScreenProps> = ({ movieId }) => {
  const router = useRouter();

  // For now, use hardcoded data based on movieId
  const hardcodedMovie = {
    id: movieId,
    name: 'The Great Adventure',
    poster: 'https://via.placeholder.com/200x300',
    plot: 'An epic journey through unknown lands.',
    duration: 120,
    year: 2020,
    genres: ['Action', 'Adventure'],
    showtimes: [
      { id: 's1', time: '14:30', purchaseLink: 'https://tickets.example.com/m1-14:30' },
      { id: 's2', time: '17:00', purchaseLink: 'https://tickets.example.com/m1-17:00' }
    ]
  };

  const handlePurchase = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hardcodedMovie.name}</Text>
      <Image source={{ uri: hardcodedMovie.poster }} style={styles.poster} />
      <Text style={styles.info}>Year: {hardcodedMovie.year}</Text>
      <Text style={styles.info}>Duration: {hardcodedMovie.duration} mins</Text>
      <Text style={styles.info}>Genres: {hardcodedMovie.genres.join(', ')}</Text>
      <Text style={styles.plot}>{hardcodedMovie.plot}</Text>
      
      <Text style={styles.showtimesTitle}>Showtimes:</Text>
      <FlatList
        data={hardcodedMovie.showtimes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePurchase(item.purchaseLink)}>
            <Text style={styles.showtime}>Time: {item.time} (Buy Ticket)</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MovieScreen;
