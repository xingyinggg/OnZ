// Standard imports
import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
    ScrollView,
    FlatList
} from "react-native";


// Component imports
import RowDescription from "../components/rowDescription.js";

// Asset imports
import FilterLogo from "../assets/filter_logo.png";
import SearchLogo from "../assets/search_logo.png";
import FoodCatergoryLogo from "../assets/categories/food_logo.png";
import CraftsCatergoryLogo from "../assets/categories/crafts_logo.png";
import PetsCatergoryLogo from "../assets/categories/pets_logo.png";
import OutdoorsCatergoryLogo from "../assets/categories/outdoors_logo.png";
import SportsCatergoryLogo from "../assets/categories/sports_logo.svg";
import EntertainmentCatergoryLogo from "../assets/categories/entertainment_logo.png";
import CultureCatergoryLogo from "../assets/categories/culture_logo.png";

import swipeFeatureLogo from "../assets/swipeFeature_logo.png";


import { TouchableOpacity } from "react-native";

// Main Component
export default HomePage = ({ navigation }) => {

    // State variables
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
        // Add more items here
      ];

    // Functions


    // Return statement, what the component will render
    return (

        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Welcome back
                        {/* TO DO: link the username to backend! */}
                        <Text style={{fontWeight:'bold'}}> username</Text>
                    !</Text>
                </View>

                {/* <View style={{ height: 10 }} /> */}
                
                <View style={styles.searchContainer}>
                    <Image
                        source={SearchLogo}
                        style={{ width: 20, height: 20, position: 'absolute', left: 20 }}
                    />

                    <Text style={styles.searchPlaceholder}>Search Places</Text>

                    <Image
                        source={FilterLogo}
                        style={{ width: 25, height: 25, position: 'absolute', right: 20 }}
                    />
                </View>

                <View style={{ height: 10 }} />

                {/* <ScrollView horizontal={styles.categoriesContainer}> */}
                <ScrollView horizontal contentContainerStyle={styles.categoriesContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('foodCategoryPage')}>
                        <View style={styles.categoryItem}>
                            <Image
                                source={FoodCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Food</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('craftsCategoryPage')}>
                        <View style={styles.categoryItem}>
                            <Image
                                source={CraftsCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Crafts</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('petsCategoryPage')}>
                        <View style={styles.categoryItem}>
                            <Image
                                source={PetsCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Pets</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('outdoorsCategoryPage')}>
                        <View style={styles.categoryItem}>
                            <Image
                                source={OutdoorsCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Outdoors</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('sportsCategoryPage')}>
                        <View style={styles.categoryItem}>
                            <Image
                                source={SportsCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Sports</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('entertainmentCategoryPage')}>
                        <View style={styles.categoryItem}>
                            <Image
                                source={EntertainmentCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Leisure</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('cultureCategoryPage')}>                            
                        <View style={styles.categoryItem}>
                            <Image
                                source={CultureCatergoryLogo}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryText}>Culture</Text>
                        </View>
                    </TouchableOpacity>
                        

                </ScrollView>

                <Image 
                    source={swipeFeatureLogo} 
                    style={ styles.swipeAlignment}
                />

                <View style={styles.popularNowContainer}>
                    <Text style={styles.popularNowText}>Popular Now</Text>
                    <FlatList
                        data={popularPlaces}
                        renderItem={({ item }) => (
                        <RowDescription
                            imageSource={item.imageSource}
                            name={item.name}
                            rating={item.rating}
                            location={item.location}
                            price={item.price}
                        />
                        )}
                        keyExtractor={item => item.id}
                    />

                    <FlatList
                        data={popularPlaces}
                        renderItem={({ item }) => (
                        <RowDescription
                            imageSource={item.imageSource}
                            name={item.name}
                            rating={item.rating}
                            location={item.location}
                            price={item.price}
                        />
                        )}
                        keyExtractor={item => item.id}
                    />

                    <FlatList
                        data={popularPlaces}
                        renderItem={({ item }) => (
                        <RowDescription
                            imageSource={item.imageSource}
                            name={item.name}
                            rating={item.rating}
                            location={item.location}
                            price={item.price}
                        />
                        )}
                        keyExtractor={item => item.id}
                    />



                </View>


            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

// Styles
const styles = StyleSheet.create({

    // Add different styles here, each item is a style object
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
        paddingHorizontal: 20,
    },
    welcome:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 22,
        marginBottom: 10,
    },
    searchContainer: {
        backgroundColor: '#DBE5E7',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 15,
        justifyContent: 'center',
    },
    searchPlaceholder: {
        color: '585858',
        paddingHorizontal: 30,
    },
    categoriesContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginBottom: 10,
    },
    categoryItem: {
        backgroundColor: '#E0F7FA',
        borderRadius: 25,
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 5,
        width: 100,
        height: 100,
    },
    categoryImage: {
        width: 30,
        height: 30,
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 14,
    },
    swipeAlignment: {
        alignSelf: 'center',
        marginTop: 10,
        // width: 200,
        marginBottom: 10, 
    },
    popularNowContainer: {
        // flexDirection: 'row',
        marginVertical: 10,
        // marginTop: 10,
    },
    popularNowText:{
        fontSize: 22,
        fontWeight: 'bold',
        // marginTop: 10,
   },



});