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
import PasswordField from "../../components/passwordField";
import { useRoute } from '@react-navigation/native';
import Header1 from "../../components/texts/header1";
import ButtonField from "../../components/buttonField";

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
    }

    return (
        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>  

                {/* Title */}
                <Header1
                    text='New Password'
                />

                {/*description*/}
                <Text style={styles.subHeaderText}> Enter a new password</Text>
                {/*new password */}
                <PasswordField 
                    value={password} 
                    onChangeTextFunction={(text) => { 
                        handlePasswordInput(text)}}
                    placeholder= {"NEW PASSWORD"}
                >
                </PasswordField>

                {/* space between code input and continue button*/}
                <View style={{ height: 10 }} />

                {/*confirm password description*/}
                <Text style={styles.subHeaderText}> Confirm password</Text>
                {/*new password */}
                <PasswordField 
                    value={confirmPassword} 
                    onChangeTextFunction={(text) => { 
                        handleConfirmPassword(text)}}
                    placeholder={'CONFIRM PASSWORD'}
                >
                </PasswordField>

                <View style={{ height: 16 }} />

                <ButtonField
                onPress={handleNewPassword} 
                title= 'CONFIRM'
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
        marginBottom: 10,
    },
    subHeaderText: {
        fontsize: 12,
        textAlign: 'left',
        width: '80%', 
        marginBottom: 8

    },
})