import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const categories = ['Food', 'Crafts', 'Pets', 'Outdoor', 'Leisure', 'Sports', 'Culture'];

const CategorySection = ({ selectedCategories, setSelectedCategories }) => {
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            const updatedCategories = [...selectedCategories, category];
            setSelectedCategories(updatedCategories);
            console.log('Selected categories:', updatedCategories);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Category</Text>
            <View style={styles.categoryContainer}>
                {categories.map((category, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[
                            styles.categoryButton, 
                            selectedCategories.includes(category) && styles.selectedCategoryButton
                        ]}
                        onPress={() => toggleCategory(category)}
                    >
                        <Text style={[
                            styles.categoryText, 
                            selectedCategories.includes(category) && styles.selectedCategoryText
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

export default CategorySection;
