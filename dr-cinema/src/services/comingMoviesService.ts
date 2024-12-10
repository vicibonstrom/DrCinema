// src/services/movieService.ts
import { Movie } from '../types/movie';

export const getComingMovies = async (apiKey: string): Promise<Movie[]> => {
  try {
    const response = await fetch('https://api.kvikmyndir.is/upcoming', {
      headers: {
        'x-access-token': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // Handle HTTP errors
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data: Movie[] = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format');
    }

    return data;
  } catch (error) {
    console.error('Error getting coming movies:', error);
    return [];
  }
};