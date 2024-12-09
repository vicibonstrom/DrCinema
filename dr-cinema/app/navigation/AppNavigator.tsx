import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CinemasScreen from '../../src/screens/CinemasScreen';
import CinemaDetailScreen from '../../src/screens/CinemaDetailScreen';
import MovieScreen from '../../src/screens/MovieScreen';
import UpcomingMoviesScreen from '../../src/screens/UpcomingMoviesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cinemas" component={CinemasScreen} />
      <Stack.Screen name="CinemaDetail" component={CinemaDetailScreen} />
      <Stack.Screen name="Movie" component={MovieScreen} />
      <Stack.Screen name="UpcomingMovies" component={UpcomingMoviesScreen} />
    </Stack.Navigator>
  );
}