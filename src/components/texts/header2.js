// big karma light
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Asset import

const Header1 = ({text}) => {
    return (
        <Text style={styles.headerText}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontFamily: 'Karma-Light',
    },
});

export default Header1;
