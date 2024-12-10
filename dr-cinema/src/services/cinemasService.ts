import { Theater } from '../types/theater';

export const getTheaters = async (apiKey: string): Promise<Theater[]> => {
  try {
  const response = await fetch('https://api.kvikmyndir.is/theaters', {
      headers: {
        'x-access-token': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data: Theater[] = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format');
    }

    return data;
  } catch (error) {
    console.error('Error getting theaters:', error);
    return [];
  }  
};