import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const categories = ['FOC', '$', '$$', '$$$'];

const BudgetSection = ({ selectedBudget, setSelectedBudget }) => {
    const toggleCategory = (category) => {
        if (selectedBudget.includes(category)) {
            setSelectedBudget(selectedBudget.filter(item => item !== category));
        } else {
            const updatedBudget = [...selectedBudget, category];
            setSelectedBudget(updatedBudget);
            console.log('Selected budget:', updatedBudget);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Budget</Text>
            <Text style={styles.title1}>( FOC: $0 | $: &lt;$10 | $$: $10-25 | $$$: ≥$25 )</Text>
            <View style={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[
                            styles.categoryButton, 
                            selectedBudget.includes(category) && styles.selectedCategoryButton
                        ]}
                        onPress={() => toggleCategory(category)}
                    >
                        <Text style={[
                            styles.categoryText, 
                            selectedBudget.includes(category) && styles.selectedCategoryText
                        ]}>
                            {category}
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
    },
    title1: {
        fontSize: 14,
        marginBottom: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '98%',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    categoryButton: {
        borderColor: '#6EC1D4',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 22,
        backgroundColor: '#fff',
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

export default BudgetSection;
