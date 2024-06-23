import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

const NearestMRTSection = () => {
  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: '1', value: 'Admiralty' },
    { key: '2', value: 'Aljunied' },
    { key: '3', value: 'Ang Mo Kio' },
    { key: '4', value: 'Bartley' },
    { key: '5', value: 'Bayfront' },
    { key: '6', value: 'Beauty World' },
    { key: '7', value: 'Bedok' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearest MRT</Text>
      <View style={styles.dropdownContainer}>
        <MultipleSelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          placeholder="Search"
          boxStyles={styles.dropdownBox}
          inputStyles={styles.dropdownInput}
          dropdownTextStyles={styles.dropdownText}
          selectedItemStyles={styles.selectedItem} // Style for selected items
          selectedItemTextStyles={styles.selectedItemText} // Style for selected items' text
        />
              {selected.length === 0 ? (
        <View style={{ marginBottom: 50 }} />
      ) : (
        <View style={{ marginBottom: 200 }} />
      )}
      </View>

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
  dropdownContainer: {
    borderColor: '#6EC1D4',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    maxHeight: 100, // Adjust this value as needed for your layout
  },
  dropdownBox: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdownInput: {
    color: '#6EC1D4',
    fontSize: 15,
  },
  dropdownText: {
    color: '#',
    fontSize: 15,
  },
  selectedItem: {
    backgroundColor: '#6EC1D4', // Blue background for selected items
    marginVertical: 2, // Reduce vertical margin between selected items
    padding: 5, // Adjust padding for selected items
  },
  selectedItemText: {
    color: '#A0CED9', // White text color for selected items
  },
});

export default NearestMRTSection;
