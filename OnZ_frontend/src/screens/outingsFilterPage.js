import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    ScrollView,
} from "react-native";
import axios from 'axios';

// Component imports
import Header1 from "../components/texts/header1";
import BottomBar from "../components/bottomBar";
import ButtonField from "../components/buttonField";
import BackButton from "../components/backButton";

// Sections 
import CategorySection from "../components/filters/categorySection";
import BudgetSection from "../components/filters/budgetSection";
import DateSection from "../components/filters/dateSection";
import NearestMRTSection from "../components/filters/nearestMRTSection";
import ChooseYourDestinationSection from "../components/filters/chooseYourDestinationSection";
import GetResultsBySection from "../components/filters/getResultsBySection";
import NumberOfActivitiesSection from "../components/filters/numberOfActivitiesSection";

// Main Component
const SearchFilterPage = ({ navigation }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState({ start: null, end: null });
    const [selectedStations, setSelectedStations] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState([]);
    const [selectedResultsDate, setSelectedResultsDate] = useState(null);
    const [selectedNumberOfActivities, setSelectedNumberOfActivities] = useState([]);
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
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

    const applyFilters = async () => {
        const query = {
            categories: selectedCategories,
            budgets: selectedBudget,
            date: selectedDate,
            time: selectedTime,
            stations: selectedStations,
            choice: selectedChoice,
            resultsDate: selectedResultsDate,
            numberOfActivities: selectedNumberOfActivities,
        };

        console.log('Applying queries:', query);

        try {
            const response = await axios.get(`http://192.168.1.13:3000/event/findEvents`, { params: query });
            setEvents(response.data);
            console.log(selectedChoice);
            if (selectedChoice === 'With Others') {
                navigation.navigate('outingRoomPage');
            }
            else{
                navigation.navigate('swipingCard');
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <BackButton navigation={navigation} />
                        <Header1 text='Create an Outing' />
                    </View>
                    <CategorySection
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />
                    <BudgetSection
                        selectedBudget={selectedBudget}
                        setSelectedBudget={setSelectedBudget}
                    />
                    {/* <DateSection 
                        title="Date-time of the Outing"
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                    /> */}
                    <NearestMRTSection
                        selectedStations={selectedStations}
                        setSelectedStations={setSelectedStations}
                    />
                    <ChooseYourDestinationSection
                        selectedChoice={selectedChoice}
                        setSelectedChoice={setSelectedChoice}
                    />
                    {/* <GetResultsBySection
                        selectedResultsDate={selectedResultsDate}
                        setSelectedResultsDate={setSelectedResultsDate}
                    /> */}
                    <NumberOfActivitiesSection
                        selectedNumberOfActivities={selectedNumberOfActivities}
                        setSelectedNumberOfActivities={setSelectedNumberOfActivities}
                    />
                    <View style={styles.buttonsContainer}>
                        <ButtonField
                            onPress={applyFilters}
                            title={'Apply'}
                        />
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
    contentContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    buttonsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
});

export default SearchFilterPage;
