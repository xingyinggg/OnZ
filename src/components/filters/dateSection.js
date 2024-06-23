import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateSection = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({ start: null, end: null });
  const [pickerMode, setPickerMode] = useState("date");
  const [timeType, setTimeType] = useState(null);

  const showDatePicker = () => {
    setPickerMode("date");
    setDatePickerVisibility(true);
  };

  const showTimePicker = (type) => {
    setPickerMode("time");
    setTimeType(type);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (pickerMode === "date") {
      setSelectedDate(date);
    } else if (pickerMode === "time") {
      setSelectedTime((prev) => ({ ...prev, [timeType]: date }));
    }
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Date-time of the Outing</Text>
      <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
        <Text style={styles.dateText}>
          {selectedDate ? selectedDate.toLocaleDateString() : "Select a day"}
        </Text>
      </TouchableOpacity>
      <View style={styles.timeContainer}>
        <TouchableOpacity style={styles.timePicker} onPress={() => showTimePicker("start")}>
          <Text style={styles.timeText}>
            {selectedTime.start ? selectedTime.start.toLocaleTimeString() : "Start Time"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timePicker} onPress={() => showTimePicker("end")}>
          <Text style={styles.timeText}>
            {selectedTime.end ? selectedTime.end.toLocaleTimeString() : "End Time"}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={pickerMode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

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
    alignItems: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#6EC1D4',
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
  timeText: {
    fontSize: 16,
    color: '#6EC1D4',
  },
});

export default DateSection;
