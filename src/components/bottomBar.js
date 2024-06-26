import React, { useState, useEffect } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image 
} from 'react-native';
import { useRoute, useFocusEffect } from '@react-navigation/native';

const BottomBar = ({ navigation }) => {
    const route = useRoute();
    const [selected, setSelected] = useState('homePage');

    useFocusEffect(
        React.useCallback(() => {
            setSelected(route.name || 'homePage');
        }, [route.name])
    );

    const icons = {
        Home: require('../assets/bottom_bar/home_logo.png'),
        Outings: require('../assets/bottom_bar/outings_logo.png'),
        CreateOuting: require('../assets/bottom_bar/createOutings_logo.png'),
        Likes: require('../assets/bottom_bar/likes_logo.png'),
        Account: require('../assets/bottom_bar/account_logo.png'),
    };

    const handlePress = (screen) => {
        navigation.navigate(screen);
        setSelected(screen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handlePress('homePage')} style={styles.item}>
                <Image source={icons.Home} style={[styles.icon, selected === 'homePage' && styles.selectedIcon]} />
                <Text style={[styles.text, selected === 'homePage' && styles.selectedText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('outingsPage')} style={styles.item}>
                <Image source={icons.Outings} style={[styles.icon, selected === 'outingsPage' && styles.selectedIcon]} />
                <Text style={[styles.text, selected === 'outingsPage' && styles.selectedText]}>Outings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('createOutingsPage')} style={styles.item}>
                <Image source={icons.CreateOuting} style={[styles.icon, selected === 'createOutingsPage' && styles.selectedIcon]} />
                <Text style={[styles.text, selected === 'createOutingsPage' && styles.selectedText]}>Create Outing</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('likesPage')} style={styles.item}>
                <Image source={icons.Likes} style={[styles.icon, selected === 'likesPage' && styles.selectedIcon]} />
                <Text style={[styles.text, selected === 'likesPage' && styles.selectedText]}>Likes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('accountPage')} style={styles.item}>
                <Image source={icons.Account} style={[styles.icon, selected === 'accountPage' && styles.selectedIcon]} />
                <Text style={[styles.text, selected === 'accountPage' && styles.selectedText]}>Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#DBE5E7',
        paddingVertical: 15,
        justifyContent: 'space-around',
        paddingHorizontal: 10,

    },
    item: {
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        tintColor: '#585858',
    },
    selectedIcon: {
        tintColor: '#000',
    },
    text: {
        fontSize: 12,
        color: '#585858',
    },
    selectedText: {
        color: '#000',
    },
});

export default BottomBar;
