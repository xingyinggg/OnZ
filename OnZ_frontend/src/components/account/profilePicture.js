import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfilePicture = ({ imageSource, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={imageSource} style={styles.image} />
                </View>
                <Text style={styles.text}>Change Profile Picture</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        borderRadius: 75, // Half of the width and height to create a circle
        borderWidth: 2,
        borderColor: '#000000', // Color of the circle border
        padding: 5, // Adjust padding as needed
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    text: {
        marginTop: 10,
        color: '#585858',
    },
});

export default ProfilePicture;
