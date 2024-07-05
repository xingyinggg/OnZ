import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const chooseChoice = ['By Yourself', 'With Others'];

const ChooseYourDestinationSection = ({ selectedChoice, setSelectedChoice }) => {
    const toggleCategory = (choice) => {
        if (selectedChoice === choice) {
            setSelectedChoice('');
        } else {
            setSelectedChoice(choice);
            console.log('Choose Your Destination Yourself:', choice);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Your Destination</Text>
            <View style={styles.categoryContainer}>
                {chooseChoice.map((choice, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[
                            styles.categoryButton, 
                            selectedChoice === choice && styles.selectedCategoryButton
                        ]}
                        onPress={() => toggleCategory(choice)}
                    >
                        <Text style={[
                            styles.categoryText, 
                            selectedChoice === choice && styles.selectedCategoryText
                        ]}>
                            {choice}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    categoryButton: {
        borderColor: '#6EC1D4',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 18,
        margin: 6,
        backgroundColor: '#fff',
        width: '46%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedCategoryButton: {
        backgroundColor: '#A0CED9',
        borderColor: '#A0CED9',
    },
    categoryText: {
        color: '#6EC1D4',
        fontSize: 15,
    },
    selectedCategoryText: {
        color: '#fff',
    },
});

export default ChooseYourDestinationSection;

