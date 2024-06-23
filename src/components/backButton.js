// Standard imports
import React from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

// Component imports
import BackButtonLogo from "../assets/commons/back_logo.png";
import Header1 from "../components/texts/header1";

// Main Component
const BackButton = ({ header, navigation }) => {

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Image 
                    source={BackButtonLogo} 
                    style={styles.backButtonImage} 
                />
            </TouchableOpacity>
            <Header1 text={header} />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'flex-start',
    },
    backButton: {
        marginRight: 10,
    },
    backButtonImage: {
        width: 30, 
        height: 30,
    },
});

export default BackButton;

