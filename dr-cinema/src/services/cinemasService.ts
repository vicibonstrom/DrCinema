// Get list of all cinemas
export const getCinemas = async (apiKey: string) => {
  const response = await fetch('https://api.kvikmyndir.is/theaters', {
    headers: {
      'x-access-token': apiKey,
    },
  }).then((response) => {
    return response.json();
  }).catch((error) => {
    console.error('Error getting cinemas: ', error)
    return [];
  });
};