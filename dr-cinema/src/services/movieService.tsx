// Get all movies from https://api.kvikmyndir.is/movies using the authentication token
export const getMovies = async () => {
  const response = await fetch('https://api.kvikmyndir.is/movies', {
    headers: {
      'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY3NTZjN2U5YWE2MjRlOTNlZTkyNDk5NCIsImlhdCI6MTczMzc0NTYzNywiZXhwIjoxNzMzODMyMDM3fQ.INJvmEVa8c2XIMso9Tq33v2F-1DTZ_hdVyd_MH3KB3g',
    },
  });
  return response.json();
}