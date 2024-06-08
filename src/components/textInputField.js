import { 
    View, 
    TextInput, 
    StyleSheet 
} from "react-native";

// main component
export default TextInputField = ({ value, placeholder, onChangeTextFunction }) => {
    return (
        <View style={styles.fieldBox}>
            <TextInput
                style={styles.fieldText}
                onChangeText={(text) => { onChangeTextFunction(text); }}
                value={value}
                placeholder={placeholder}
            />
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 20,
        borderColor: '#DBE5E7',
        borderWidth: 1,
        justifyContent: 'center',
    },
    fieldText: {
        left: '5%',
        fontSize: 18,
        // TODO: Add font family
        fontFamily: "Inter, sans-serif",
        color: '#585858',
        paddingRight: 35,
    },
});