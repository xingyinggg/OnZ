import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportList = ({ reportTitle, reportDate, participants }) => {
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
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#585858',
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#585858',
    },
    participants: {
        fontSize: 14,
        color: '#585858',
    },
});

export default ReportList;
