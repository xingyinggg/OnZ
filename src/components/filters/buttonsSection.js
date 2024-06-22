import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const ButtonsSection = ({onPress, title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.buttonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#DBE5E7',
        paddingHorizontal: 35,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '80%',
    },
    buttonText: {
        color: '#585858',
        fontSize: 16,
    },
});

export default ButtonsSection;