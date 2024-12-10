import { Cinema } from '../types/cinema';

export const getCinemas = async (apiKey: string): Promise<Cinema[]> => {
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

    const data: Cinema[] = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format');
    }

    return data;
  } catch (error) {
    console.error('Error getting cinemas:', error);
    return [];
  }  
};