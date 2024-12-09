import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  info: {
    fontSize: 14,
    marginBottom: 4
  },
  moviesTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8
  },
  movieItem: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 8
  },
  movieInfo: {
    flexShrink: 1
  },
  movieName: {
    fontSize: 16,
    fontWeight: '600'
  },
  genres: {
    fontSize: 14,
    color: '#555'
  }
});

export default styles;