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
    onPress,
} from "react-native";

// Component imports
import Header1 from "../components/texts/header1";
import CategorySection from "../components/filters/categorySection";
import BudgetSection from "../components/filters/budgetSection";
import DateSection from "../components/filters/dateSection";
import NearestMRTSection from "../components/filters/nearestMRTSection";
import ButtonsSection from "../components/filters/buttonsSection";
import BottomBar from "../components/bottomBar";

// Main Component
const SearchFilterPage = ({ navigation }) => {

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Header1 text='Filter' />
                    <CategorySection />
                    <BudgetSection />
                    <DateSection title="Date-time of the Outing" />
                    <NearestMRTSection />
                    <View style={styles.buttonsContainer}>
                        <ButtonsSection title='Reset' onPress={() => { navigation.navigate('searchFilterPage') }} />
                        <ButtonsSection title='Apply' onPress={() => { navigation.navigate('listingPage') }} />
                    </View>
                </View>
                <BottomBar/>
                          
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
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
    },
});

export default SearchFilterPage;

