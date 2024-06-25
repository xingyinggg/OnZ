import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";

// Component imports
import Header1 from "../components/texts/header1";
import CategorySection from "../components/filters/categorySection";
import BudgetSection from "../components/filters/budgetSection";
import DateSection from "../components/filters/dateSection";
import NearestMRTSection from "../components/filters/nearestMRTSection";
import ButtonsSection from "../components/filters/buttonsSection";
import BottomBar from "../components/bottomBar";

import BackButton from "../assets/commons/back_logo.png";
import { FlatList } from "react-native-gesture-handler";

// Main Component
const SearchFilterPage = ({ navigation }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMRT, setSelectedMRT] = useState([]);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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


    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <ScrollView 
                    style={styles.contentContainer}>

                
                        
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Image 
                                source={BackButton} 
                                style={styles.backButtonImage} 
                            />
                        </TouchableOpacity>
                        <Header1 text='Filter' />
                    </View>
                    <CategorySection 
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                    <BudgetSection 
                        selectedBudget={selectedBudget}
                        setSelectedBudget={setSelectedBudget}
                    />
                    <DateSection 
                        title="Date-time of the Outing"
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                    <NearestMRTSection 
                        selectedMRT={selectedMRT}
                        setSelectedMRT={setSelectedMRT}
                    />

                    <View style={styles.buttonsContainer}>
                        {/* <ButtonsSection title='Reset' onPress={navigation.navigate('searchFilterPage')} /> */}
                        <ButtonsSection title='Apply' onPress={() => { navigation.navigate('listingPage') }} />
                    </View>
                </ScrollView>
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
    contentContainer:{
        paddingHorizontal: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    backButtonText: {
        fontSize: 24,
        color: '#000',
    },
    backButtonImage: {
        width: 30, 
        height: 30 
    },
});

export default SearchFilterPage;
