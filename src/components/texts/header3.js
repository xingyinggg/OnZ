// small normal black bold
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Asset import

const Header3 = ({text}) => {
    return (
        <Text style={styles.headerText}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Header3;
