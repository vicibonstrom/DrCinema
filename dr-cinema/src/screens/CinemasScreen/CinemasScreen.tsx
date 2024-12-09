import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

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
  cinemaItem: {
    marginBottom: 12,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4
  },
  cinemaName: {
    fontSize: 18,
    fontWeight: '600'
  },
  cinemaWebsite: {
    fontSize: 14,
    color: '#555'
  }
});