// Standard imports
import { 
    React, 
    useState,
} from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard
} from "react-native";

// Component imports
import TextInputField from "../components/textInputField";

// Asset imports
import OnZLogo from "../assets/commons/OnZ_logo.png";
import back_button from "../assets/commons/back_logo.png";

// Component imports


// Main Component
export default TermsOfService = ({ navigation }) => {



    // Return statement, what the component will render
    return (

        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <View style={styles.container}>

            <View style={styles.backButton}>
                <TouchableOpacity onPress={() => navigation.goback()}>
                    {/* <Image 
                        source={back_button} 
                        style={styles.backButtonImage} 
                    /> */}
                </TouchableOpacity>
            </View>

                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Terms of Services </Text>
                        <Text style={styles.headerText}>and Privacy Policy</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Privacy Policy</Text>

                    <Text style={styles.text}>
                        Welcome to OnZ?! We are committed to protecting your privacy. This Privacy Policy outlines the data we collect, how we use it, and your rights.
                    </Text>

                    <Text style={styles.sectionTitle}>Data Collection</Text>
                    <Text style={styles.text}>
                        We collect personal information (name, email, preferences) and location data to provide personalised recommendations. We also gather usage data (device information, IP address, app interactions) to enhance your experience.
                    </Text>

                    <Text style={styles.sectionTitle}>Use of Data</Text>
                    <Text style={styles.text}>
                        We use your data to offer personalised recommendations, improve app functionality, troubleshoot issues, and send updates. We may share data with third-party service providers for analytics and advertising, ensuring they protect your data.
                    </Text>

                    <Text style={styles.sectionTitle}>Data Storage and Security</Text>
                    <Text style={styles.text}>
                        Your data is stored securely with encryption and access controls. While we strive to protect your information, no security measures are foolproof.
                    </Text>

                    <Text style={styles.sectionTitle}>User Rights</Text>
                    <Text style={styles.text}>
                        You can access, correct, or delete your personal information anytime. Opt out of data collection or targeted advertising through app settings. Contact us for assistance.
                    </Text>

                    <Text style={styles.sectionTitle}>Third-Party Services</Text>
                    <Text style={styles.text}>
                        Our app integrates with third-party services (e.g., maps, analytics). Review their privacy policies to understand their data practices.
                    </Text>

                    <Text style={styles.sectionTitle}>Cookies and Tracking Technologies</Text>
                    <Text style={styles.text}>
                        We use cookies to track user activity and preferences. Manage your cookie preferences through app or device settings.
                    </Text>

                    <Text style={styles.sectionTitle}>Policy Changes</Text>
                    <Text style={styles.text}>                    
                        We may update this Privacy Policy periodically. We will notify you of changes by updating the date and, if necessary, through the app. Review this policy regularly.
                    </Text>

                    <Text style={styles.sectionTitle}>Contact Information</Text>
                    <Text style={styles.text}>
                        For questions or concerns, contact us at contact@onz.com. Our privacy team is here to help.
                        Thank you for trusting us with your personal information. Your privacy is our priority.
                    </Text>

                </ScrollView>


            </View>
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
    back_button:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        paddingHorizontal: 16,
    },
    backButtonImage: {
        width: 40, 
        height: 40 

    },
    contentContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerContainer: {
        backgroundColor: '#DBE5E7',
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch', // Make the header container stretch to fill its parent width
    },
    headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Ensures the text is centered within the Text component
    paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#585858',
        padding: 10,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        color: '#585858',
        padding: 10,
    },

});
