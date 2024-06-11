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


// Component imports
import TextInputField from "../../components/textInputField";

// Asset imports
import OnZLogo from "../../assets/commons/OnZ_logo.png";
import { TouchableOpacity } from "react-native";

// Main Component
export default LoginPage = ({ navigation }) => {

    // State variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);

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
                {/* <View style={{ height: 16 }}></View> */}
                <View style={{ height: 16 }} />

                {/* Title */}
                <Text style={styles.headerText}>LOGIN</Text>

                {/* Username Input Field */}
                <TextInputField
                    value={username}
                    placeholder={"USERNAME"}
                    onChangeTextFunction = {(text) => { 
                        handleUsernameInput(text); 
                    }}
                    style={styles.inputField}
                />

                {/* Add space between the two input fields */}
                {/* <View style={{ height: 16 }}></View> */}
                <View style={{ height: 16 }} />


                {/* Password Input Field */}
                <TextInputField
                    value={password}
                    placeholder={"PASSWORD"}
                    onChangeTextFunction = {(text) => { 
                        handlePasswordInput(text); 
                    }}
                    style={styles.inputField}
                />  

                {/* Add space between remember me, forget password and login */}
                {/* <View style={{ height: 10 }}></View> */}
                <View style={{ height: 10 }} />

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
                    <TouchableOpacity onPress={() => navigation.navigate('forgetPasswordPage')}>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                

                {/* Add space between Remember Me, Forget Password and Login */}
                {/* <View>View style={{ height: 10 }}</View> */}
                <View style={{ height: 10 }} />

                {/* Login Button */}
                {/* TODO: create custom button if yall want? */}
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={() => handleLogin()}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

                {/* <Button
                    title={"Login"}
                    onPress={() => {
                        handleLogin();
                    }}
                /> */}

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
                <TouchableOpacity onPress={() => navigation.navigate('registerPage')}>
                    <Text style={styles.register}>
                        Don't Have An Account? Register now!
                    </Text>
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
        //fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Karma-Bold',
    },
    inputField: {
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 12,
        // dk why this isnt working (KIV)
        borderRadius: 8,
        backgroundColor: '#DBE5E7',
        marginBottom: 16,
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
    loginButton: {
        backgroundColor: '#DBE5E7',
        width: '35%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    loginText: {
        color: '585858',
        fontSize: 16,
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