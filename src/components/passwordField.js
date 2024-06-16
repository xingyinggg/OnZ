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
        // <View style={styles.container}>
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
        // </View>
    );
}

// styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        //marginBottom: 10
        // padding: 20,
    },
    fieldBox: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        width: '86%',
        borderRadius: 15,
        borderColor: '#D2D6DA',
        borderWidth: 1,
        paddingHorizontal: 10,
        // marginVertical: 10,
        //marginBottom: 12,
    },
    fieldText: {
        flex: 1,
        left: '5%',
        fontSize: 16,
        // TODO: Add font family
        // fontFamily: <INSERT FONT HERE>,
        color: '#8F8F8F',
        paddingRight: 35,
        //textAlignVertical: 'center'
    },
    toggleText: {
        color: '#1e90ff',
        marginLeft: 10,
    },
});