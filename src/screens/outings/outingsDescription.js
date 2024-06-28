import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { useRoute } from '@react-navigation/native';

// Component imports
import BackButton from "../../components/backButton";
import Header1 from "../../components/texts/header1";
import ReportHeader from "../../components/outings/reportHeader";
import BottomBar from "../../components/bottomBar";
import RowDescription from "../../components/rowDescription";

// Main Component
//  INCOMPLETE. XY JS WNA SLEEP ALR OK
const OutingsDescriptionPage = ({ navigation }) => {
    const route = useRoute();
    const { report } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <BackButton navigation={navigation} />
                    <View style={styles.headerContainer}>
                        <Header1 text={report.title} />
                    </View>
                </View>
                <Text style={styles.date}>{report.date}</Text>
                <Text style={styles.participants}>{report.participants.join(', ')}</Text>
                <Header1 text='Activity' />
                {/* Add your activities and votes here */}
                <View>
                    <RowDescription /* Your RowDescription component data here */ />
                </View>
            </ScrollView>
            <BottomBar navigation={navigation} />
        </SafeAreaView>
    );
};

export default OutingsDescriptionPage;

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
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    participants: {
        fontSize: 14,
        color: '#585858',
        marginBottom: 20,
    },
});
