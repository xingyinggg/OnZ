import { 
    View, 
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    Text
} from "react-native";
import
    React, {
    useState
    }
from "react";

// main component
export default PassswordField = ({ value, placeholder, onChangeTextFunction }) => {

    const [secureText, setSecureText] = useState(true);

    return (
        <View style={styles.fieldBox}>
            <TextInput
                style={styles.fieldText}
                secureTextEntry={secureText}
                value={value}
                onChangeText={(text) => { onChangeTextFunction(text); }}
                placeholder={placeholder}
                
            />

            <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                <Text style={styles.toggleText}>{secureText}</Text>
            </TouchableOpacity>
        </View>
        
    );
}

// styles
const styles = StyleSheet.create({
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 15,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        justifyContent: 'center',
    },
    fieldText: {
        left: '5%',
        fontSize: 16,
        // TODO: Add font family
        // fontFamily: <INSERT FONT HERE>,
        color: '#8F8F8F',
        paddingRight: 35,
        textAlignVertical: 'center'
    },
    toggleText: {
        color: '#1e90ff',
        marginLeft: 10,
    },
});