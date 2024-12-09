import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';

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