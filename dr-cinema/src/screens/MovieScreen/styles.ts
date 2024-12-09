import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 8
    },
    poster: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 8
    },
    info: {
        fontSize: 14,
        marginBottom: 4
    },
    plot: {
        fontSize: 16,
        marginVertical: 12
    },
    showtimesTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 8
    },
    showtime: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 6
    }
});

export default styles;