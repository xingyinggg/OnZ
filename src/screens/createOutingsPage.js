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
    TouchableOpacity,
} from "react-native";

// Component imports
import BottomBar from "../components/bottomBar";

// Main Component
export default LoginPage = ({ navigation }) => {



    // Return statement, what the component will render
    return (

        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>

            {/* Main container, contains all the elements of the page */}
            <SafeAreaView style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('codePage')}>
                        <Image source= {require('../assets/roomPage/createOuting_logo.png')} style={styles.icon}/>
                        <Text style={styles.buttonText} >Create Outing</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('outingsFilterPage')}>
                        <Image source= {require('../assets/roomPage/joinRoom_logo.png')} style={styles.icon}/>
                        <Text style={styles.buttonText}>Join Room</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 280 }} />

                <BottomBar navigation={navigation} />

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
        //alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        // flexDirection: 'column'
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
        // margin: 5,
    },
    buttonText: {
        color: '#6EC1D4',
        fontSize: 18,
        textAlign:'center',
        width: '80%'
    },
    icon: {
        fontSize: 28,
        marginBottom: 10,
    },
   

});
