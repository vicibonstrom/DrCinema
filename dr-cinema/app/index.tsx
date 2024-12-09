// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Dr. Cinema</Text>
      <Button
        title="View Cinemas"
        onPress={() => router.push('/cinemas')}
      />
      <Button
        title="Upcoming Movies"
        onPress={() => router.push('/upcomingMovies')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff'
  },
  title: { 
    fontSize: 24, 
    marginBottom: 20,
    fontWeight: 'bold'
  },
});