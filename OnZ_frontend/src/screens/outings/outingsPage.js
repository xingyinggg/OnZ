import React from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";

// Component imports
import BackButton from "../../components/backButton";
import Header1 from "../../components/texts/header1";
import BottomBar from "../../components/bottomBar";
import ReportList from "../../components/outings/reportList";

// LINK TO DB
const reports = [
    {
        title: 'Report 1',
        date: '11/02/2024',
        participants: ['purplechonk', 'azuriter', 'singingintherain', 'crabbybara'],
    },
    {
        title: 'Report 2',
        date: '21/02/2024',
        participants: ['purplechonk', 'azuriter', 'singingintherain', 'crabbybara', 'immabeast', 'ouchouch'],
    },
    {
        title: 'Report 3',
        date: '26/08/2024',
        participants: ['purplechonk', 'azuriter'],
    },
    // Add more reports here
];

const currentDate = new Date();

const previousOutings = reports.filter(report => {
    const [day, month, year] = report.date.split('/');
    const reportDate = new Date(year, month - 1, day);
    return reportDate < currentDate;
}).map(report => ({
    title: report.title,
    date: report.date,
    participants: report.participants,
}));

const currentOutings = reports.filter(report => {
    const [day, month, year] = report.date.split('/');
    const reportDate = new Date(year, month - 1, day);
    return reportDate >= currentDate;
}).map(report => ({
    title: report.title,
    date: report.date,
    participants: report.participants,
}));

// console.log('Previous Outings:', previousOutings);
// console.log('Current Outings:', currentOutings);

// Main Component
const OutingsPage = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.headerRow}>
                        <BackButton navigation={navigation} />
                        <View style={styles.headerContainer}>
                            <Header1 text='My History' />
                        </View>
                    </View>
                    <Header1 text='Current Outings' />
                    {currentOutings.length > 0 ? (
                        currentOutings.map((report, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigation.navigate('outingsDescriptionPage', { report })}
                            >
                                <ReportList
                                    reportTitle={report.title}
                                    reportDate={report.date}
                                    participants={report.participants}
                                />
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.noOutingsText}>No current outings.</Text>
                    )}

                    <View style={{ marginVertical: 20 }} />
                    <Header1 text='Previous Outings' />
                    {previousOutings.length > 0 ? (
                        previousOutings.map((report, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigation.navigate('outingsDescriptionPage', { report })}
                            >
                                <ReportList
                                    key={index}
                                    reportTitle={report.title}
                                    reportDate={report.date}
                                    participants={report.participants}
                                />
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.noOutingsText}>No previous outings.</Text>
                    )}
                </ScrollView>
                <BottomBar navigation={navigation} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default OutingsPage;

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
    noOutingsText: {
        fontSize: 16,
        color: '#585858',
        marginVertical: 10,
    },
});
