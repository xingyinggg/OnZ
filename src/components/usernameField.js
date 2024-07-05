import { 
    View, 
    TextInput, 
    StyleSheet 
} from "react-native";

// main component
export default UsernameField = ({value}) => {
    return (
        <View style={styles.fieldBox}>
           
        </View>
    );
}

// styles
const styles = StyleSheet.create({
    fieldBox: {
        height: 56,
        width: '86%',
        borderRadius: 20,
        borderColor: '#585858',
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
    },
});