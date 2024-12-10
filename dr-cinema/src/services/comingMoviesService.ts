// Get all unreleased movies using the authentication token
export const getComingMovies = async (apiKey: string) => {
  const response = await fetch('https://api.kvikmyndir.is/upcoming', {
    headers: {
      'x-access-token': apiKey,
    },
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error('Error getting coming movies: ', error)
    return [];
  });
};