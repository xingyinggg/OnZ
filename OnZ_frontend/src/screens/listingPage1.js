import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";
import axios from 'axios';

// Component imports
import BottomBar from "../components/bottomBar";
import RowDescription from "../components/rowDescription";
import BackButton from "../components/backButton";

// Asset imports
import SearchLogo from "../assets/search_logo.png";

// Main Component
const ListingPage1 = ({ route, navigation }) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const { filters } = route.params;  // Receive filters from route params
    const [events, setEvents] = useState([]);

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
        if (!filters || !filters.category) {
            Alert.alert('Error', 'Filters are not defined correctly.');
            return;
        }

        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://192.168.1.13:3000/event/findEvents', { params: filters });
                const allEvents = response.data;

                const filteredEvents = allEvents.filter(event => event.category === filters.category);

                setEvents(filteredEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
                Alert.alert('Error', 'An error occurred while fetching events. Please try again later.');
            }
        };

        fetchEvents();
    }, [filters]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setSearchInput(""); // Reset the search input when the component mounts
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
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
                            onSubmitEditing={() => navigation.navigate('listingPage1')}
                        />
                    </View>
                </View>

                <FlatList
                    data={events}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('placeDetailPage', { event: item })}>
                            <RowDescription
                                name={item.eventName}
                                rating={item.rating}
                                location={item.street}
                                price={item.priceRange}
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
        paddingHorizontal: 20,
        marginTop: 10,
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

export default ListingPage1;
