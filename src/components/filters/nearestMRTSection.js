import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const NearestMRTSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nearest MRT</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#6EC1D4"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchContainer: {
        borderColor: '#6EC1D4',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
    },
    searchInput: {
        color: '#6EC1D4',
    },
});

export default NearestMRTSection;
