// Get all genres using the authentication token
export const getGenres = async (apiKey: string) => {
  const response = await fetch('https://api.kvikmyndir.is/genres', {
    headers: {
      'x-access-token': apiKey,
    },
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error('Error getting genres: ', error)
    return [];
  });
};