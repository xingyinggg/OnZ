import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export default function DateSection({ title }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const showDatePicker = () => setDatePickerVisibility(true);
    const hideDatePicker = () => setDatePickerVisibility(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={showDatePicker} style={styles.datePicker}>
                <TextInput
                    numberOfLines={1}
                    editable={false}
                    placeholder='📅 Select Date'
                    value={selectedDate ? moment(selectedDate).format('DD MMMM, YYYY') : ''}
                    style={styles.input}
                />
            </TouchableOpacity>
            <DatePicker
                modal
                open={isDatePickerVisible}
                date={selectedDate}
                onConfirm={(date) => {
                    hideDatePicker();
                    setSelectedDate(date);
                }}
                onCancel={hideDatePicker}
                mode='date'
            />
            <View style={styles.timeContainer}>
                <TouchableOpacity style={styles.timePicker}>
                    <Text>Start Time</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timePicker}>
                    <Text>End Time</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    datePicker: {
        borderColor: '#6EC1D4',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
    },
    input: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#6EC1D4',
        fontSize: 16,
        marginBottom: 10,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timePicker: {
        borderColor: '#6EC1D4',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        width: '48%',
        alignItems: 'center',
    },
});
