import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const GetResultsBySection = ({ selectedResultsDate, setSelectedResultsDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");

  const showDatePicker = () => {
    setPickerMode("date");
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    if (pickerMode === "date") {
      setSelectedResultsDate(date);
    } else {
      setSelectedResultsDate('ASAP');
    }
    hideDatePicker();
  };

  const selectASAP = () => {
    setSelectedResultsDate('ASAP');
    console.log('Selected ASAP');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Results By</Text>
      <Text style={styles.reminder}>( Reminder: some activities may require prior reservation )</Text>
      <View style={styles.pickerContainer}>
        <TouchableOpacity style={styles.datePicker} onPress={showDatePicker}>
          <Text style={styles.dateText}>
            {selectedResultsDate && selectedResultsDate !== 'ASAP' 
              ? new Date(selectedResultsDate).toLocaleDateString() 
              : "Select a day"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.asapButton, 
            selectedResultsDate === 'ASAP' && styles.selectedASAPButton
          ]} 
          onPress={selectASAP}
        >
          <Text style={[
            styles.asapText, 
            selectedResultsDate === 'ASAP' && styles.selectedASAPText
          ]}>ASAP</Text>
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
  },
  reminder: {
    fontSize: 14,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    width: '98%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  datePicker: {
    borderColor: '#6EC1D4',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    width: '70%',
  },
  dateText: {
    fontSize: 16,
    color: '#6EC1D4',
  },
  asapButton: {
    borderColor: '#6EC1D4',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    alignItems: 'center',
    width: '25%',
  },
  asapText: {
    fontSize: 16,
    color: '#6EC1D4',
  },
  selectedASAPButton: {
    backgroundColor: '#A0CED9',
    borderColor: '#A0CED9',
  },
  selectedASAPText: {
    color: '#fff',
  },
});

export default GetResultsBySection;
