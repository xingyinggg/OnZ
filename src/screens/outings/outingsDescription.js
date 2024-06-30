import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useRoute } from '@react-navigation/native';

// Component imports
import BackButton from "../../components/backButton";
import Header1 from "../../components/texts/header1";
import ReportHeader from "../../components/outings/reportHeader";
import BottomBar from "../../components/bottomBar";
import VoteDescription from "../../components/outings/voteDescription";

// LINK TO DB FOR VOTE DESCRIPTION
const outingVotes = [
    {
        id: '1',
        imageSource: require('../../assets/tuftClub.jpg'),
        name: 'Tuft Club',
        rating: '5.0',
        location: 'Circular Road',
        price: '$$',
        votes: '6/6',
    },
    {
        id: '2',
        imageSource: require('../../assets/macRitchieReservoirTreetopLoop.jpg'),
        name: 'MacRitchie Reservoir',
        rating: '4.6',
        location: 'Bukit Pierce',
        price: 'FOC',
        votes: '5/6',
    },
    {
        id: '3',
        imageSource: require('../../assets/isleEatingHouse.jpg'),
        name: 'Isle Eating House',
        rating: '4.3',
        location: '35 Selgie Road',
        price: '$',
        votes: '4/6',
    },
    {
        id: '4',
        imageSource: require('../../assets/macRitchieReservoirTreetopLoop.jpg'),
        name: 'MacRitchie Reservoir',
        rating: '4.6',
        location: 'Bukit Pierce',
        price: 'FOC',
        votes: '5/6',
    },
    {
        id: '5',
        imageSource: require('../../assets/isleEatingHouse.jpg'),
        name: 'Isle Eating House',
        rating: '4.3',
        location: '35 Selgie Road',
        price: '$',
        votes: '4/6',
    },
    
    // Add more items here
];

// Main Component
const OutingsDescriptionPage = ({ navigation }) => {
    const route = useRoute();
    const { report } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <View style={styles.backButtonContainer}>
                        <BackButton navigation={navigation} />
                    </View>
                    <View style={styles.headerContainer}>
                        <ReportHeader reportTitle={report.title} reportDate={report.date} participants={report.participants} />
                    </View>
                </View>
                <View style={styles.activityHeader}>
                    <Header1 text='Activity' />
                    <Header1 text='Votes' style={styles.votesHeader} />
                </View>
                <View>
                    {outingVotes && outingVotes.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => navigation.navigate('placeDetailsPage', {
                                id: item.id,
                                imageSource: item.imageSource,
                                name: item.name,
                                rating: item.rating,
                                location: item.location,
                                price: item.price,
                                votes: item.votes
                            })}
                        >
                            <VoteDescription
                                imageSource={item.imageSource}
                                name={item.name}
                                rating={item.rating}
                                location={item.location}
                                price={item.price}
                                votes={item.votes}
                            />
                        </TouchableOpacity>
                    ))}
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
        justifyContent: 'center',
    },
    backButtonContainer: {
        position: 'absolute',
        left: 0,
    },
    headerContainer: {
        alignItems: 'center',
    },
    activityHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    votesHeader: {
        textAlign: 'right',
    },
});
