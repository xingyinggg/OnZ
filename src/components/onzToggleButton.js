import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default OnzToggle = ({ targetScreen }) => {
    const [isOn, setIsOn] = useState(false);
    const moveAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    const toggleSwitch = () => {
        Animated.timing(moveAnim, {
            toValue: isOn ? 0 : 1,
            duration: 400,
            useNativeDriver: false,
        }).start(() => {
            setIsOn(!isOn);
            if (!isOn && targetScreen) {
                navigation.navigate(targetScreen);
            }
        });
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Reset the animation state when the component is focused (navigated back to)
            moveAnim.setValue(0);
            setIsOn(false);
        });
        return unsubscribe;
    }, [navigation]);

    const translateX = moveAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 158], // Adjust this value based on your design
    });

    return (
        <View style={styles.container}>
            <View style={styles.toggleBackground}>
                <TouchableOpacity onPress={toggleSwitch} style={styles.toggleContainer}>
                    <Animated.View style={[styles.toggleCircle, { transform: [{ translateX }] }]} />
                    {!isOn && (
                        <>
                            <Text style={styles.toggleText}>OnZ?</Text>
                            <Text style={styles.subText}>Can't Decide Where To Go?</Text>
                        </>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleBackground: {
        width: 275,
        height: 115,
        borderRadius: 170,
        backgroundColor: '#A0CED9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toggleContainer: {
        width: 250,
        height: 95,
        borderRadius: 175,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    toggleCircle: {
        width: 80,
        height: 80,
        borderRadius: 45,
        backgroundColor: '#A0CED9',
        position: 'absolute',
        left: 2,
    },
    toggleText: {
        flex: 1,
        paddingLeft: 100,
        fontSize: 45,
        // fontWeight: 'bold',
        fontFamily:'Karma-Bold',
        color: '#585858',
        width: '50%'
    },
    subText: {
        position: 'absolute',
        bottom: 15,
        left: '40%',
        fontSize: 10,
        color: '#666',
    },
});
