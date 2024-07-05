import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const NearestMRTSection = ({ selectedStations, setSelectedStations }) => {
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
      <View>
        <SectionedMultiSelect
          items={data}
          IconRenderer={Icon}
          uniqueKey="key"
          displayKey="value"
          selectText="Choose some MRT stations"
          searchPlaceholderText="Search stations"
          showDropDowns={true}
          onSelectedItemsChange={(selectedItems) => {
            setSelectedStations(selectedItems);
            console.log('Selected Stations:', selectedItems);
          }}
          selectedItems={selectedStations}
          styles={{
            selectToggle: styles.multiSelectBox,
            selectToggleText: styles.selectText,
            chipContainer: styles.multiSelectChipContainer,
            chipText: styles.multiSelectChipText,
            selectToggleIconComponent: styles.selectToggleIcon,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectToggleIcon: {
    color: '#6EC1D4',
  },
  multiSelectBox: {
    borderColor: '#6EC1D4',
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',
    padding: 10,
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectText: {
    paddingHorizontal: 20,
    color: '#6EC1D4',
    marginRight: 8,
  },
  multiSelectChipContainer: {
    backgroundColor: '#A0CED9',
    borderColor: '#A0CED9',
    borderRadius: 20,
    padding: 8,
    marginBottom: 5,
  },
  multiSelectChipText: {
    color: '#fff',
    fontSize: 15,
    padding: 5,
  },
});

export default NearestMRTSection;
