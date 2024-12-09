// app/cinemas/[id]/index.tsx
import React from 'react';
import { useRouter, useSearchParams } from 'expo-router';
import CinemaDetailScreen from '../../../src/screens/CinemaDetailScreen';

export default function CinemaDetailPage() {
  const { id } = useSearchParams();
  
  return <CinemaDetailScreen cinemaId={id as string} />;
}