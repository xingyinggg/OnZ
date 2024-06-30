import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    SafeAreaView,
    Keyboard,
    ScrollView,
    Alert,
} from "react-native";

// Component imports
import BackButton from "../../components/backButton";
import BottomBar from "../../components/bottomBar";
import Header1 from "../../components/texts/header1";
import ProfileItem from "../../components/account/profileItem";
import ProfilePicture from "../../components/account/profilePicture";

// Asset imports
import ProfileLogo from '../../assets/profilePicutre_logo.png';

// TO BE LINKED TO DB 
const ProfileData = [
    {
        id: '1',
        username: 'purplechonk',
        name: 'chonk',
        email: 'purplechonk@gmail.com',
    },
];

// Main Component
const AccountPage = ({ navigation }) => {
    const handleSignOut = () => {
        Alert.alert(
            "Warning",
            "Are you sure you want to sign out?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { 
                    text: "Sign Out", 
                    onPress: () => navigation.navigate('loginPage') 
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <BackButton navigation={navigation} />
                    
                    {/* Profile Header */}
                    <View style={styles.profileContainer}>
                        <Header1 text='Profile' />
                        <ProfilePicture
                            imageSource={ProfileLogo}
                            onPress={() => navigation.navigate('changeProfilePicturePage')}
                        />
                    </View>

                    {/* Profile Items */}
                    <ProfileItem label="Username" value={ProfileData[0].username} />
                    <ProfileItem label="Name" value={ProfileData[0].name} />
                    <ProfileItem label="Email" value={ProfileData[0].email} />
                    
                    <View style={styles.buttonContainer}>
                        <ProfileItem 
                            label="Reset Password" 
                            isButton 
                            onPress={() => navigation.navigate('forgetPasswordPage')}
                        />
                        <ProfileItem 
                            label="Sign Out" 
                            isButton 
                            onPress={handleSignOut} 
                        />
                    </View>
                </ScrollView>
                <BottomBar navigation={navigation} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

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
    buttonContainer: {
        width: '100%',
    },
});

export default AccountPage;
