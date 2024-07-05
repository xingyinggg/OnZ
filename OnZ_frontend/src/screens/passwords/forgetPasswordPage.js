// Standard imports
import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    //Button,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    //Image,
} from "react-native";

// Component imports
import TextInputField from "../../components/textInputField";
import { TouchableOpacity } from "react-native";
import Header1 from "../../components/texts/header1";
import BackButton from "../../components/backButton";

// Main Component
export default forgetPasswordPage = ({ navigation }) => {

    const [email, setEmail] = useState('');

    const handleEmailInput = (text) => {
        setEmail(text);
    };

    const handleContinue = () => {
        if (email) {
            navigation.navigate('verifyEmailPage', { email });
        } else {
            alert('Please enter your email.');
        }
    };
    

    //check if email is in database replace handleContinue contents
    /*
    const handlePasswordReset = async () => {
        try {
        const response = await fetch('https://yourapi.com/reset-password', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (data.success) {
            Alert.alert('Success', 'Verification code has been sent to your email.');
            navigation.navigate('verifyEmail'); // Navigate to VerifyEmailScreen
        } else {
            Alert.alert('Error', 'Email not found in our database.');
        }
        } catch (error) {
        console.error(error);
        Alert.alert('Error', 'An error occurred. Please try again later.');
        }
    };
    */

    // Return statement, what the component will render
    return (

        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>

                <View style={styles.headerRow}>
                    <BackButton navigation={navigation} />
                </View>

                {/*title*/}
                <Header1
                    text='Reset Password'
                />

                {/* space between title and email input */}
                <View style={{ height: 16 }} />

                {/*instruction*/}
                <Text style={styles.bodyText}>Please enter your email address linked 
                    to your account to receive a verification code</Text>

                {/* email input field*/}
                <TextInputField
                    value={email}
                    placeholder={"EMAIL"}
                    onChangeTextFunction = {handleEmailInput}
                />  

                {/* space between email input and continue button*/}
                <View style={{ height: 16 }} />
                
                {/*continue button */}
                <ButtonField
                    onPress={handleContinue} 
                    title= 'CONTINUE'
                />

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
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 25,
        marginBottom: 10,
        fontFamily: 'Karma-Bold',
    },
    headerRow: {
        position: 'absolute',
        top: 20, // Adjust as needed
        left: 20, // Adjust as needed
        zIndex: 1,
    },
    bodyText: {
        fontsize: 12,
        marginBottom: 12,
        textAlign: 'center',
        width: '80%', 
        alignSelf: 'center',
    },
    continueButtonText: {
        color:'585858',
        fontsize: 14,
    },
    continueButton: {
        backgroundColor: '#DBE5E7',
        borderRadius: 20,
        width: '35%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
