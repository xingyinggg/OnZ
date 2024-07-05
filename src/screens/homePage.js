import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
} from "react-native";

// Component imports
import RowDescription from "../components/rowDescription.js";
import BottomBar from "../components/bottomBar.js";
import Header1 from "../components/texts/header1.js";
import Header2 from "../components/texts/header2.js";
import OnzToggle from "../components/onzToggleButton.js";

// Asset imports
import FilterLogo from "../assets/filter_logo.png";
import SearchLogo from "../assets/search_logo.png";

import FoodCatergoryLogo from "../assets/categories/food_logo.png";
import CraftsCatergoryLogo from "../assets/categories/crafts_logo.png";
import PetsCatergoryLogo from "../assets/categories/pets_logo.png";
import OutdoorsCatergoryLogo from "../assets/categories/outdoors_logo.png";
import SportsCatergoryLogo from "../assets/categories/sports_logo.png";
import EntertainmentCatergoryLogo from "../assets/categories/entertainment_logo.png";
import CultureCatergoryLogo from "../assets/categories/culture_logo.png";

const HomePage = ({ navigation }) => {
    // State variables
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSearchInput(""); // Reset the search input when the component mounts
        });

        return unsubscribe;
    }, [navigation]);

    // TO DO: link to DB
    const popularPlaces = [
        {
            id: '1',
            imageSource: require('../assets/tuftClub.jpg'),
            name: 'Tuft Club',
            rating: '5.0',
            location: 'Circular Road',
            price: '$$',
        },
        {
            id: '2',
            imageSource: require('../assets/macRitchieReservoirTreetopLoop.jpg'),
            name: 'MacRitchie Reservoir',
            rating: '4.6',
            location: 'Bukit Pierce',
            price: 'FOC',
        },
        {
            id: '3',
            imageSource: require('../assets/isleEatingHouse.jpg'),
            name: 'Isle Eating House',
            rating: '4.3',
            location: '35 Selgie Road',
            price: '$',
        },
        // Add more items here
    ];

    const categoryData = [
        { id: '1', name: 'Food', imageSource: FoodCatergoryLogo, page: 'listingPage' },
        { id: '2', name: 'Crafts', imageSource: CraftsCatergoryLogo, page: 'listingPage' },
        { id: '3', name: 'Pets', imageSource: PetsCatergoryLogo, page: 'listingPage' },
        { id: '4', name: 'Outdoor', imageSource: OutdoorsCatergoryLogo, page: 'listingPage' },
        { id: '5', name: 'Sports', imageSource: SportsCatergoryLogo, page: 'listingPage' },
        { id: '6', name: 'Leisure', imageSource: EntertainmentCatergoryLogo, page: 'listingPage' },
        { id: '7', name: 'Culture', imageSource: CultureCatergoryLogo, page: 'listingPage' },
    ];

    return (
        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <View style={styles.welcome}>
                                <Header2 text='Welcome back ' />
                                <Header1 text='username' />
                                <Header2 text='!' />
                            </View>

                            <View style={styles.searchContainer}>
                                <Image source={SearchLogo} style={styles.searchIcon} />

                                <TextInput
                                    style={styles.searchInput}
                                    placeholder="Search Places"
                                    placeholderTextColor="#585858"
                                    value={searchInput}
                                    onChangeText={setSearchInput}
                                    onSubmitEditing={() => navigation.navigate('listingPage')}
                                />

                                <TouchableOpacity onPress={() => navigation.navigate('searchFilterPage')}>
                                    <Image source={FilterLogo} style={styles.filterIcon} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ height: 10 }} />

                            <FlatList
                                horizontal
                                data={categoryData}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
                                        <View style={styles.categoryItem}>
                                            <Image source={item.imageSource} style={styles.categoryImage} />
                                            <Text style={styles.categoryText}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={item => item.id}
                                contentContainerStyle={styles.categoriesContainer}
                                showsHorizontalScrollIndicator={false}
                            />

                            <OnzToggle targetScreen='createOutingsPage' />

                            <View style={styles.popularNowContainer}>
                                <Header1 text='Popular Now' />
                            </View>
                        </>
                    }
                    data={popularPlaces}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('placeDetailPage')}>
                            <RowDescription
                                imageSource={item.imageSource}
                                name={item.name}
                                rating={item.rating}
                                location={item.location}
                                price={item.price}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.contentContainer}
                />

                {!isKeyboardVisible && <BottomBar navigation={navigation} />}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default HomePage;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingHorizontal: '5%',
    },
    welcome: {
        marginTop: '5%',
        flexDirection: 'row',
        // alignItems: 'center',
    },
    searchContainer: {
        backgroundColor: '#DBE5E7',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        color: '#000',
    },
    filterIcon: {
        width: 25,
        height: 25,
    },
    categoriesContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginBottom: 15,
    },
    categoryItem: {
        backgroundColor: '#E0F7FA',
        borderRadius: 100,
        alignItems: 'center',
        marginHorizontal: 10,
        width: 90,
        height: 90,
        justifyContent: 'center',
    },
    categoryImage: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 14,
    },
    popularNowContainer: {
        marginTop: 10,
        justifyContent: 'left',
    },
});
