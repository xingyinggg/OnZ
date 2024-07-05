import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileItem = ({ label, value, isButton, onPress }) => {
    return (
        <View style={styles.container}>
            {isButton ? (
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>{label}</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.item}>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        padding: 12,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        color: '#585858',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#585858',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        padding: 12,
        backgroundColor: '#fff',
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        color: '#585858',
    },
});

export default ProfileItem;

