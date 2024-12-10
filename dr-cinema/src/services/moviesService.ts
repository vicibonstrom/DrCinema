// Get all movies using the authentication token
export const getMovies = async (apiKey: string) => {
  const response = await fetch('https://api.kvikmyndir.is/movies', {
    headers: {
      'x-access-token': apiKey,
    },
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error('Error getting movies: ', error)
    return [];
  });
};