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
    cinemaItem: {
        marginBottom: 12,
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4
    },
    cinemaName: {
        fontSize: 18,
        fontWeight: '600'
    },
    cinemaWebsite: {
        fontSize: 14,
        color: '#555'
    }
});

export default styles;
