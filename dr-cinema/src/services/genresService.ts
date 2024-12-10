import { Genre } from "../types/genres";

export const getGenres = async (apiKey: string): Promise<Genre[]> => {
  try {
    const response = await fetch('https://api.kvikmyndir.is/genres', {
      headers: {
        'x-access-token': apiKey,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data: Genre[] = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Unexpected response format');
    }

    return data;
  } catch (error) {
    console.error('Error getting genres:', error);
    return [];
  }
};