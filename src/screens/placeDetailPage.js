import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { useRoute } from '@react-navigation/native';

// Main Component
// incomplete. just passing on data
const PlaceDetailsPage = () => {
    const route = useRoute();
    const { id, imageSource, name, rating, location, price, votes } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.rating}>Rating: {rating}</Text>
                <Text style={styles.location}>Location: {location}</Text>
                <Text style={styles.price}>Price: {price}</Text>
                <Text style={styles.votes}>Votes: {votes}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PlaceDetailsPage;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    rating: {
        fontSize: 18,
        marginBottom: 10,
    },
    location: {
        fontSize: 18,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        marginBottom: 10,
    },
    votes: {
        fontSize: 18,
        marginBottom: 10,
    },
});
