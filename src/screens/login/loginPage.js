import {
    View,
    Text,
    StyleSheet,
} from "react-native";

// Main Component
export default LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({

    // Add different styles here
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});