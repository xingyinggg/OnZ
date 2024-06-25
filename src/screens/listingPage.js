import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
} from "react-native";

// Component imports
import BottomBar from "../components/bottomBar";
import RowDescription from "../components/rowDescription";
import BackButton from "../components/backButton";

// Asset imports
import SearchLogo from "../assets/search_logo.png";
import OnZLogo from "../assets/commons/OnZ_logo.png";

// Main Component
const ListingPage = ({ navigation }) => {
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

    // TO DO: link to DB
    const searches = [
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

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSearchInput(""); // Reset the search input when the component mounts
        });

        return unsubscribe;
    }, [navigation]);

    const renderHeader = () => (
        <View>
            <View style={styles.headerContainer}>
                <BackButton navigation={navigation} />

                <View style={styles.searchContainer}>
                    <Image
                        source={SearchLogo}
                        style={styles.searchIcon}
                    />

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search Places"
                        placeholderTextColor="#585858"
                        value={searchInput}
                        onChangeText={setSearchInput}
                        onSubmitEditing={() => navigation.navigate('listingPage')}
                    />
                </View>
            </View>
        </View>
    );

    // Return statement, what the component will render
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    ListHeaderComponent={renderHeader}
                    data={searches}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('placeDetailsPage')}>
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

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    searchContainer: {
        backgroundColor: '#DBE5E7',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '88%',
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
});

export default ListingPage;
