import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: 'bold'
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
    infoContainer: {
        flexShrink: 1
    },
    name: {
        fontSize: 16,
        fontWeight: '600'
    },
    releaseDate: {
        fontSize: 14,
        color: '#555'
    }
});

export default styles;