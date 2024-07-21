import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import axios from 'axios';

const NearestMRTSection = ({ selectedStations, setSelectedStations }) => {
  const [data, setData] = useState([]);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.13:3000/event/station');
        const modifiedData = response.data.map(station => ({
          id: station.stationID,
          name: station.name
        }));
        setData(modifiedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearest MRT</Text>
      <View>
        <SectionedMultiSelect
          items={data}
          IconRenderer={Icon}
          uniqueKey="id"
          displayKey="name"
          selectText="Choose some MRT stations"
          searchPlaceholderText="Search stations"
          showDropDowns={true}
          onSelectedItemsChange={(selectedItems) => {
            setSelectedStations(selectedItems);
            const selectedStationNames = selectedItems.map(itemId => {
              const station = data.find(station => station.id === itemId);
              return station ? station.name : null;
            }).filter(name => name !== null);
            setStations(selectedStationNames);
            console.log('Selected Stations:', selectedStationNames);
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
