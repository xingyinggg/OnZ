// Standard imports
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    Image,
    TouchableOpacity,
} from "react-native";

// Component imports
import BottomBar from "../components/bottomBar";
import BackButton from "../components/backButton";

// Main Component
const LoginPage = ({ navigation }) => {

    // Return statement, what the component will render
    return (
        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>
                <View style={styles.headerContainer}>
                    <BackButton navigation={navigation} />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('codePage')}>
                            <Image source={require('../assets/roomPage/createOuting_logo.png')} style={styles.icon} />
                            <Text style={styles.buttonText}>Create Outing</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('outingsFilterPage')}>
                            <Image source={require('../assets/roomPage/joinRoom_logo.png')} style={styles.icon} />
                            <Text style={styles.buttonText}>Join Room</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <BottomBar navigation={navigation} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default LoginPage;

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#6EC1D4',
        borderRadius: 20,
        width: 110,
        height: 150,
    },
    buttonText: {
        color: '#6EC1D4',
        fontSize: 18,
        textAlign: 'center',
        width: '80%',
    },
    icon: {
        fontSize: 28,
        marginBottom: 10,
    },
});
