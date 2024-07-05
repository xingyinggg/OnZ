// Standard imports
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
// import CheckBox from "@react-native-community/checkbox";
import CheckBox from "expo-checkbox";
import axios from 'axios';


// Component imports
import TextInputField from "../../components/textInputField";
import Header1 from "../../components/texts/header1";
import PasswordField from "../../components/passwordField";
import Header3 from "../../components/texts/header3";

// Asset imports
import OnZLogo from "../../assets/commons/OnZ_logo.png";
import { TouchableOpacity } from "react-native";

// Main Component
export default RegisterPage = ({ navigation }) => {

    // State variables
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSelected, setSelection] = useState(false);

    // Functions
    const handleEmailInput = (text) => {
        setEmail(text);
    };

    const handleUsernameInput = (text) => {
        setUsername(text);
    };

    const handlePasswordInput = (text) => {
        setPassword(text);
    };

    const handleConfirmPassword = (text) => {
        setConfirmPassword(text);
    };

    function handleRegister(){
        // TODO: Add login functionality here, link to backend, navigate to home page
        console.log("Email: " + email);
        console.log("Username: " + username);
        console.log("Password: " + password);
        console.log("Confirm Password: " + confirmPassword);
        const userData={
            email: email,
            username: username,
            password: password
        }

        axios
            .post("http://10.124.13.145:8001/registerPage", userData)
            .then(res => console.log(res.data))
            .catch(e => console.log(e))

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
                {/* <View style={{ height: 16 }}></View> */}
                <View style={{ height: 16 }} />

                {/* Title */}
                <Header1 
                    text='REGISTER'
                />

                <View style={{ height: 10 }} />

                {/* Email Input Field */}
                <TextInputField
                    value={email}
                    placeholder={"EMAIL"}
                    onChangeTextFunction = {(text) => { 
                        handleEmailInput(text); 
                    }}
                />

                {/* Add space between the email and username*/}
                <View style={{ height: 16 }} />

                {/* Username Input Field */}
                <TextInputField
                    value={username}
                    placeholder={"USERNAME"}
                    onChangeTextFunction = {(text) => { 
                        handleUsernameInput(text); 
                    }}
                />

                {/* Add space between username and password*/}
                <View style={{ height: 16 }} />


                {/* Password Input Field */}
                <PasswordField 
                    onChangeTextFunction={(text) => { 
                    handlePasswordInput(text)}}
                    value={password} 
                    placeholder={'PASSWORD'}
                />

                {/* Add space between password and confirm password*/}
                <View style={{ height: 16 }} />

                {/* Password Input Field */}
                {/* <TextInputField
                    value={confirmPassword}
                    placeholder={"CONFIRM PASSWORD"}
                    onChangeTextFunction = {(text) => { 
                        handleConfirmPassword(text); 
                    }}
                    style={styles.inputField}
                /> */}

                <PasswordField 
                    onChangeTextFunction={(text) => { 
                    handleConfirmPassword(text)}}
                    value={confirmPassword} 
                    placeholder={'CONFIRM PASSWORD'}
                />

                {/* Add space between remember me, forget password and login */}
                {/* <View style={{ height: 10 }}></View> */}
                <View style={{ height: 16 }} />

                {/* Remember Me and Forgot Password */}
                <View style={styles.alignment}>
                    <View style={styles.rememberMe}>
                        <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                        />
                        <Text style={styles.rememberMeText}>Remember Me</Text>
                    </View>
                </View>
                

                {/* Add space between Remember Me, Forget Password and Login */}
                {/* <View>View style={{ height: 10 }}</View> */}
                <View style={{ height: 16 }} />

                <ButtonField
                onPress={handleRegister} 
                title= 'REGISTER'
                />

                {/* Terms of Services and Privacy Policy */}
                <Text style={styles.termsOfService}>
                    By clicking login, you agree to our{' '}
                    <TouchableOpacity onPress={() => navigation.navigate('termsOfServicePage')}>
                        <Text style={styles.termsOfService1}>Terms of Service and Privacy Policy</Text>
                    </TouchableOpacity>
                </Text>


                {/* Add space between Terms of Services and Register */}
                {/* <View>View style={{ height: 60 }}</View> */}
                <View style={{ height: 80 }} />

                {/* Register */}      
                <View style={ {flexDirection: 'row',justifyContent: 'center', alignItems: 'center'} }>
                <TouchableOpacity onPress={() => navigation.navigate('loginPage')}>
                    <Header3>
                        Have An Account? Login!
                    </Header3>
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
        paddingHorizontal: 12,
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 8,
        // change colour of checkbox when tick (KIV)
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rememberMeText: {
        fontSize: 14,
    },
    forgotPassword: {
        color: '#000000',
    },
    alignment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 16,
      },
    termsOfService: {
        color: '#000000',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,
    },
    termsOfService1: {
        color: '#000000',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    register: {
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold',
      },
});