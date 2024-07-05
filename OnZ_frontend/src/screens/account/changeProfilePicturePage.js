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
    ScrollView,
} from "react-native";

// Component imports
import BackButton from "../../components/backButton";
import BottomBar from "../../components/bottomBar";
import Header1 from "../../components/texts/header1";
import ProfileItem from "../../components/account/profileItem";
import ProfilePicture from "../../components/account/profilePicture";

// Asset imports
import ProfileLogo from '../../assets/profilePicutre_logo.png';


// Main Component
export default AccountPage = ({ navigation }) => {



    // Return statement, what the component will render
    return (
        // Dismiss keyboard when user taps outside of the text input field
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <BackButton navigation={navigation} />
                    {/* Profile Header */}
                    <View style={styles.profileContainer}>
                        <Header1 text='Profile' />
                        <ProfilePicture
                            imageSource={ProfileLogo}
                            onPress={() => { /* Handle profile picture change */ }}
                        />
                    </View>

                    {/* Profile Items */}
                    <ProfileItem label="Username" value="purplechonk" />
                    <ProfileItem label="Name" value="chonk" />
                    <ProfileItem label="Email" value="purplechonk@gmail.com" />
                    <ProfileItem label="Reset Password" isButton onPress={() => { /* Handle reset password */ }} />
                    <ProfileItem label="Delete Account" isButton onPress={() => { /* Handle delete account */ }} />
                    <ProfileItem label="Sign Out" isButton onPress={() => { /* Handle sign out */ }} />
                </ScrollView>
                <BottomBar navigation={navigation} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
});