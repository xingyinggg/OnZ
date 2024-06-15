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
import TextInputField from "../components/textInputField";
import { TouchableOpacity } from "react-native";

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

                {/* Logo */}
                {/*<Image 
                    source={OnZLogo} 
                    style={{ width: 150, height: 150 }} 
                />*/}

                {/*title*/}
                <Text style={styles.headerText}>Reset Password</Text>

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
                <View style={{ height: 10 }} />
                
                {/*continue button*/}
                <View style={styles.continueButton}>
                {/* <TouchableOpacity onPress={() => handleContinue()}> */}
                <TouchableOpacity onPress={handleContinue}>
                    <Text style={styles.continueButtonText}>CONTINUE</Text>
                </TouchableOpacity>
                </View>

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
    },
    headerText: {
        fontSize: 24,
        marginBottom: 10,
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
