import React , {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, FlatList, TouchableOpacity,TextInput, TouchableWithoutFeedback,CheckBox} from 'react-native';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {MaterialIcons as Icon} from '@expo/vector-icons';


const NearestMRTSection = () => {
  const [selectedStations, setSelectedStations] = useState([]);
  console.log('Selected Stations:', selectedStations);

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
                displayKey='value'
                selectText="Choose some MRT stations"
                searchPlaceholderText="Search stations"
                showDropDowns={true}
                onSelectedItemsChange={setSelectedStations}
                selectedItems={selectedStations}
                styles={{
                    // selectToggleIcon:  
                    selectToggle: styles.multiSelectBox,
                    selectToggleText: styles.selectText,
                    chipContainer: styles.multiSelectChipContainer,
                    chipText: styles.multiSelectChipText,
                    selectToggleIconComponent: styles.selectToggleIcon,
                     
                  }}
                />
            </View>
            {/* <MultipleSelectList
                setSelected={handleSelect}
                data={data}
                save="value"
                placeholder="Search"
                boxStyles={styles.dropdownBox}
                inputStyles={styles.dropdownInput}
                dropdownStyles={styles.dropdown}
                dropdownTextStyles={styles.dropdownText}
                checkBoxStyles={styles.checkBox}
            /> */}

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginBottom: 20,
        // //alignItems: 'center',
        width: '100%',
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
        justifyContent: 'space-between', // This aligns the text and the icon
        alignItems: 'center',

    },
    selectText: {
        paddingHorizontal: 20,
        color: '#6EC1D4',
        marginRight: 8,
    },
    multiSelectChipContainer: {
        backgroundColor: '#A0CED9',
        borderColor:'#A0CED9',
        borderRadius: 20,
        padding: 8,
        // margin: 5,
        marginBottom: 5,

    },
    multiSelectChipText: {
        color: '#fff',
        fontSize: 15
    },
});

export default NearestMRTSection;