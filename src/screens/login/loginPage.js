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
import TextInputField from "../../components/textInputField";

// Asset imports
import OnZLogo from "../../assets/OnZ_logo.png";

// Main Component
export default LoginPage = ({ navigation }) => {

    // State variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Functions
    const handleUsernameInput = (text) => {
        setUsername(text);
    };

    const handlePasswordInput = (text) => {
        setPassword(text);
    };

    const handleLogin = () => {
        // TODO: Add login functionality here, link to backend, navigate to home page
        console.log("Username: " + username);
        console.log("Password: " + password);
    }

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

                {/* Add space between the logo and the title */}
                <View style={{ height: 16 }}></View>

                {/* Title */}
                <Text style={styles.headerText}>Login</Text>

                {/* Username Input Field */}
                <TextInputField
                    value={username}
                    placeholder={"Username"}
                    onChangeTextFunction = {(text) => { 
                        handleUsernameInput(text); 
                    }}
                />

                {/* Add space between the two input fields */}
                <View style={{ height: 16 }}></View>

                {/* Password Input Field */}
                <TextInputField
                    value={password}
                    placeholder={"Password"}
                    onChangeTextFunction = {(text) => { 
                        handlePasswordInput(text); 
                    }}
                />

                {/* Add space between the input field and the button */}
                <View style={{ height: 16 }}></View>

                {/* Login Button */}
                {/* TODO: create custom button if yall want? */}
                <Button
                    title={"Login"}
                    onPress={() => {
                        handleLogin();
                    }}
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
        fontSize: 24,
        marginBottom: 24,
    },
});