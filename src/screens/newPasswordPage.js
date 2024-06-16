import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    // Button,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
} from "react-native";

//import password field component
import PasswordField from "../components/passwordField";
import { useRoute } from '@react-navigation/native';
// import ButtonField from "../components/buttonField";

export default NewPassword = ({ navigation }) => {

    const route = useRoute();
    const email = route.params?.email;
    console.log('Email in NewPasswordPage:', email);

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') 

    const handlePasswordInput = (text) => {
        setPassword(text);
    };

    const handleConfirmPassword = (text) => {
        setConfirmPassword(text);
    };

    const handleNewPassword = () => {
        // TODO: Add login functionality here, link to backend, navigate to home page
        console.log("password: " + password);
        console.log("confirmPassword: " + confirmPassword);
        if (password === confirmPassword) {
            navigation.navigate('login')
        }
    }

    return (
        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>  

                {/* Title */}
                <Text style={styles.headerText}>New Password</Text>

                {/*description*/}
                <Text style={styles.subHeaderText}> Enter a new password</Text>
                {/*new password */}
                <PasswordField 
                    onChangeTextFunction={(text) => { 
                        handlePasswordInput(text)}}
                    value={password} 
                    placeholder= {"NEW PASSWORD"}
                />
                
                {/* Add space between the password and the confirm password */}
                <View style={{ height: 16 }} />

                {/*confirm password description*/}
                <Text style={styles.subHeaderText}> Confirm password</Text>
                {/*new password */}
                <PasswordField 
                    onChangeTextFunction={(text) => { 
                    handleConfirmPassword(text)}}
                    value={confirmPassword} 
                    placeholder={'CONFIRM PASSWORD'}
                />

                {/* Add space between the confirm pw and the continue button */}
                <View style={{ height: 16 }} />

                <ButtonField
                    onPress={handleNewPassword} 
                    title= 'CONTINUE'
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

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
        marginBottom: 20,
    },
    subHeaderText: {
        fontsize: 12,
        //textAlign: 'left',
        width: '85%', 
        marginBottom: 5,

    },
})