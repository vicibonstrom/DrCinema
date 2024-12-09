import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Cinema {
  id: string;
  name: string;
  website: string;
}

const hardcodedCinemas: Cinema[] = [
  {
    id: '1',
    name: 'Cinema Aurora',
    website: 'https://aurora.example.com'
  },
  {
    id: '2',
    name: 'Movie Palace',
    website: 'https://moviepalace.example.com'
  },
  {
    id: '3',
    name: 'Grand Screen',
    website: 'https://grandscreen.example.com'
  }
];

const CinemasScreen: React.FC = () => {

  const handleCinemaPress = (cinemaId: string) => {
    // Normally you'd navigate to a details screen here
    console.log(`Cinema pressed: ${cinemaId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cinemas</Text>
      <FlatList
        data={hardcodedCinemas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cinemaItem}
            onPress={() => handleCinemaPress(item.id)}
          >
            <Text style={styles.cinemaName}>{item.name}</Text>
            <Text style={styles.cinemaWebsite}>{item.website}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CinemasScreen;