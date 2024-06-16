// Standard imports
import { 
    React, 
    useState,
    useEffect,
    useRef,
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
import { TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import Header1 from "../../components/texts/header1";

// Main Component
export default VerifyEmailPage = ({ navigation }) => {

    const route = useRoute();
    const email = route.params?.email;// Retrieve the email passed from the previous screen

    const maskEmail = (email) => {
        const [username, domain] = email.split('@');
        const maskedUsername = username.charAt(0) + '*'.repeat(username.length - 1);
        return `${maskedUsername}@${domain}`;
    };

    
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
  
    const [timer, setTimer] = useState(180);
    const [isTimerActive, setIsTimerActive] = useState(true);

    const digit2Ref = useRef(null);
    const digit3Ref = useRef(null);
    const digit4Ref = useRef(null);

        useEffect(() => {
            let interval;
            if (isTimerActive) {
              interval = setInterval(() => {
                setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
              }, 1000);
            }
            return () => clearInterval(interval);
          }, [isTimerActive]);
        
          const handleResendCode = () => {
            setIsTimerActive(false); // Stop the current timer
            setTimer(180); // Reset the timer value
            setIsTimerActive(true); // Restart the timer
            // Add logic to resend verification code here
          };
        
          const handleConfirmCode = () => {
            // Add logic to confirm the entered code here and link to backend
            navigation.navigate('newPasswordPage', {email});
          };
        
          const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
          };
    



    // Return statement, what the component will render
    return (

        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>

                {/*title*/}
                <Header1
                    text='Verify Email Address'
                />

                {/*instruction*/}
                <Text style={styles.bodyText}>Verification code has been sent to</Text>
                <Text style={styles.emailMasked}>{maskEmail(email)}</Text>
                <View style={styles.codeContainer}>
                    <TextInput
                    style={styles.codeInput}
                    keyboardType="numeric"
                    maxLength={1}
                    value={digit1}
                    onChangeText={(text) => {
                        setDigit1(text);
                        if (text) digit2Ref.current.focus();
                    }}
                    />
                    <TextInput
                    style={styles.codeInput}
                    keyboardType="numeric"
                    maxLength={1}
                    value={digit2}
                    ref={digit2Ref}
                    onChangeText={(text) => {
                        setDigit2(text);
                        if (text) digit3Ref.current.focus();
                    }}
                    />
                    <TextInput
                    style={styles.codeInput}
                    keyboardType="numeric"
                    maxLength={1}
                    value={digit3}
                    ref={digit3Ref}
                    onChangeText={(text) => {
                        setDigit3(text);
                        if (text) digit4Ref.current.focus();
                    }}
                    />
                    <TextInput
                    style={styles.codeInput}
                    keyboardType="numeric"
                    maxLength={1}
                    value={digit4}
                    ref={digit4Ref}
                    onChangeText={setDigit4}
                    />
                </View>
                
                {/* space between code input and continue button*/}
                <View style={{ height: 10 }} />
                
                {/*confirm button*/}
                <ButtonField
                    onPress={handleConfirmCode} 
                    title= 'VERIFY CODE'
                />

                {/* space between continue button and timer*/}
                <View style={{ height: 10 }} />
                

                <View style={styles.resendCodeContainer}>
                <Text style={styles.timerText}>
                    {formatTime(timer)}{' '}
                </Text>
                <TouchableOpacity onPress={handleResendCode}>
                    <Text style={styles.resendText}>Resend Confirmation Code</Text>
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
        marginTop: -80,
    },
    headerText: {
        fontSize: 24,
        marginBottom: 10,
    },
    bodyText: {
        fontsize: 12,
        marginBottom: 1,
        textAlign: 'center',
        width: '80%', 
        alignSelf: 'center',
    },
    emailMasked: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
      },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 12
        ,
      },
    codeInput: {
        borderWidth: 1,
        borderColor: '#DBE5E7',
        borderRadius: 8,
        width: 40,
        height: 40,
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 15,
      },
    confirmButtonText: {
        color:'585858',
        fontsize: 14,
    },
    confirmButton: {
        backgroundColor: '#DBE5E7',
        borderRadius: 20,
        width: '35%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resendText: {
        color: '#94A8AD',
        weight: 'bold',
      },
    resendCodeContainer: {
        flexDirection: 'row',
    },

});
