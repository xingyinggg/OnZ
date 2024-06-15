import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from "react-native";

import starLogo from '../assets/description/star_logo.png';
import locationPinLogo from '../assets/description/locationPin_logo.png';

// main component
export default RowDescription = ({ imageSource, name, rating, location, price }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image} />
                <View style={styles.priceTag}>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.ratingContainer}>
                    <Image source={starLogo} style={styles.starIcon} />
                    <Text style={styles.rating}>{rating}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Image source={locationPinLogo} style={styles.locationIcon} />
                    <Text style={styles.location}>{location}</Text>
                </View>
            </View>
        </View>
      );
    };

// styles
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      marginBottom: 0,
      alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    priceTag: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#FFEE93',
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 8,
    },
    price: {
        fontSize: 12,
        color: '#000',
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
      justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        fontSize: 14,
        color: '#585858',
    },
    location: {
        fontSize: 14,
        color: '#999',
    },
    starIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    locationIcon: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
});

