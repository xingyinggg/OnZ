import 
    React, 
    {useState,
    useEffect,
    }
 from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    
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

    const handleOnzButton = () => {
        console.log("RoomCode: " + roomCode);
        // navigation.navigate('')
    }

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
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
                            textAlign="center"
                        />
                    </View>

                    <View style={{ height: 16 }} />
                    
                    {/*button */}
                    <ButtonField
                        onPress={handleOnzButton}
                        title={'OnZ!'}
                    />
                </View>
                
            
                {!isKeyboardVisible && <BottomBar navigation={navigation} />}
            
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

// Styles
const styles = StyleSheet.create({

    // Add different styles here, each item is a style object
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // width: '100%',
        paddingBottom: 300,
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
        textAlign: 'center',
    }
});