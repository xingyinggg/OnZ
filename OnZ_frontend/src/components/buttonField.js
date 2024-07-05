import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default ButtonField = ({ onPress, title}) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
      );
    
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DBE5E7',
        paddingHorizontal: 35,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText: {
        color: '#585858',
        fontSize: 16,
        // backgroundColor: 'red',
    },
  });
  