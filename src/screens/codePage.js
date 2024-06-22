import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    TextInput,
} from "react-native";

// Component imports
import BottomBar from "../components/bottomBar";
import ButtonField from "../components/buttonField";

// Main Component
export default LoginPage = ({ navigation }) => {
    const [roomCode, setRoomCode] = useState('');

    const handleRoomCode = (text) => {
        setRoomCode(text);
    };

    const handleOnzButton = (text) => {
        console.log("RoomCode: " + roomCode);
        // navigation.navigate('')
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>

                <View style={styles.innerContainer}>
                    {/*title*/}
                    <Text style={styles.headerText}>Enter Your Outing Code</Text>

                    {/*code input*/}
                    <View style={styles.fieldBox}>
                        <TextInput
                            style={styles.fieldText}
                            onChangeText={(text) => {
                                handleRoomCode(text)
                            }}
                            keyboardType="numeric"
                            value={roomCode}
                            placeholder={'OUTING CODE'}
                        />
                    </View>

                    <View style={{ height: 16 }} />
                    
                    {/*button */}
                    <ButtonField
                        onPress={handleOnzButton}
                        title={'OnZ!'}
                    />
                </View>

                <View style={{ height: 375 }} />


                <BottomBar navigation={navigation}/>

            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

// Styles
const styles = StyleSheet.create({

    // Add different styles here, each item is a style object
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    innerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    headerText: {
        marginTop: 200,
        fontSize: 24,
        marginBottom: 10,
        fontFamily: 'Karma-Bold'
    },
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 15,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    fieldText:{
        fontSize: 16,
        color: '#8F8F8F',
        alignContent: 'center',
    }
});