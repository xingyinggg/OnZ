// Standard imports
import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
} from "react-native";

// Component imports
import TextInputField from "../components/textInputField";

// Asset imports
import OnZLogo from "../assets/commons/OnZ_logo.png";

// Component imports


// Main Component
export default LoginPage = ({ navigation }) => {



    // Return statement, what the component will render
    return (

        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>

                {/* Logo */}
                <Image 
                    source={OnZLogo} 
                    style={{ width: 150, height: 150 }} 
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
    },
    headerText: {
        fontSize: 20,
        marginBottom: 12,
    },

});
