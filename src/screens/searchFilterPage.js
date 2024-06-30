import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    ScrollView,
} from "react-native";

// Component imports
import Header1 from "../components/texts/header1";
import CategorySection from "../components/filters/categorySection";
import BudgetSection from "../components/filters/budgetSection";
import DateSection from "../components/filters/dateSection";
import NearestMRTSection from "../components/filters/nearestMRTSection";
import BottomBar from "../components/bottomBar";
import ButtonField from "../components/buttonField";
import BackButton from "../components/backButton";

// Main Component
const SearchFilterPage = ({ navigation }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState({ start: null, end: null });
    const [selectedStations, setSelectedStations] = useState([]);
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

    const applyFilters = () => {
        const filters = {
            categories: selectedCategories,
            budgets: selectedBudget,
            date: selectedDate,
            time: selectedTime,
            stations: selectedStations,
        };
        console.log('Applying filters:', filters);
        // Here you would send `filters` to your backend or perform the filtering logic
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <BackButton navigation={navigation} />
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
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                    />
                    <NearestMRTSection 
                        selectedStations={selectedStations}
                        setSelectedStations={setSelectedStations}
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
