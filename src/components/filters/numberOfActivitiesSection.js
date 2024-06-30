import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';

const NumberOfActivitiesSection = ({ selectedNumberOfActivities, setSelectedNumberOfActivities }) => {
  const data = [
    { key: '5', value: 5 },
    { key: '10', value: 10 },
    { key: '15', value: 15 },
    { key: '20', value: 20 }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Limit Number of Suggested Activities</Text>
      <View>
        <SectionedMultiSelect
          items={data}
          IconRenderer={Icon}
          uniqueKey="key"
          displayKey="value"
          single // Ensure only one selection
          selectText="Select a Number"
          searchPlaceholderText="Search a Number"
          showDropDowns={true}
          onSelectedItemsChange={(selectedItems) => {
            setSelectedNumberOfActivities(selectedItems);
            console.log('Selected Number of Activities:', selectedItems);
          }}
          selectedItems={selectedNumberOfActivities}
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

export default NumberOfActivitiesSection;
