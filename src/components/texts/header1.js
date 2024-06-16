// big karma bold
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Asset import

const Header1 = ({text}) => {
    return (
        <Text style={styles.headerText}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontFamily: 'Karma-Bold',
    },
});

export default Header1;
