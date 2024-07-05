import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native";
import Clipboard from '@react-native-community/react-native-clipboard';
import { Ionicons } from '@expo/vector-icons';


import ButtonField from "../components/buttonField";

// Main Component
const OutingRoomPage = ({navigation}) => {
    const outingCode = '123 456';
    const [username, setUsername] = useState('');
  
    const copyToClipboard = () => {
      Clipboard.setString(outingCode);
      alert('Code copied to clipboard!');
    };

    const handleGoButton = () => {
        console.log('Username: ', username );
        navigation.navigate('swipingCard')
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Invite your friends!</Text>
  
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>Outing Code: {outingCode}</Text>
        </View>

        <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Ionicons name='copy' size={20} color="#A0CED9" />
            <Text style={styles.copyText}>click to copy</Text>
        </TouchableOpacity>

        <View style={styles.namesContainer}>
          {/* need to do the name container, where all the username who have entered this page shows up...  */}
        </View>

       <ButtonField
            onPress={handleGoButton}
            title='GO!'
       />
        
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    headerText: {
      fontSize: 24,
      marginVertical: 20,
    },
    codeContainer: {
      backgroundColor: 'rgba(110, 193, 212, 0.5)',
      width:  '80%',
      height: '8%',
      borderRadius: 20,
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    codeText: {
      fontSize: 20,
      fontFamily: 'Karma-Bold',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      color: '#585858'
    },
    copyButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
      color:'#6EC1D4'
    },
    copyText: {
      marginLeft: 5,
      fontSize: 14,
      color: '#6EC1D4',
    },
    namesContainer: {
        marginBottom: 10,
        justifyContent: 'center',

    }
    
    
  });
  
  export default OutingRoomPage;