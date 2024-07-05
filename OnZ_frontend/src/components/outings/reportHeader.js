import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportHeader = ({ reportTitle, reportDate, participants }) => {
    // Ensure participants is always an array
    const participantsList = Array.isArray(participants) ? participants : [];

    return (
        <View style={styles.list}>
            <View style={styles.header}>
                <Text style={styles.title}>{reportTitle}</Text>
                <Text style={styles.date}>{reportDate}</Text>
            </View>
            <Text style={styles.participants}>
                {participantsList.join(', ')}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        padding: 20,
        margin: 10,
        backgroundColor: '#DBE5E7',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'Karma-Bold',
        marginRight: 40,
    },
    date: {
        fontSize: 24,
        color: '#000000',
        fontFamily: 'Karma-Bold'
    },
    participants: {
        fontSize: 14,
        color: '#585858',
    },
});

export default ReportHeader;
