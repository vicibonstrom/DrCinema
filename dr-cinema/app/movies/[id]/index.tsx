import React from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import MovieScreen from '@/src/screens/MovieScreen';

export default function MovieDetailPage() {
  const { id } = useSearchParams();
  
  return <MovieScreen movieId={id as string} />;
}