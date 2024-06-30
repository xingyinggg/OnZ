import { 
    View, 
    Text, 
    StyleSheet,
    Image
} from "react-native";

import starLogo from '../../assets/description/star_logo.png';
import locationPinLogo from '../../assets/description/locationPin_logo.png';

// main component
export default VoteDescription = ({ imageSource, name, rating, location, price, votes }) => {
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
                <View style={styles.ratingLocationContainer}>
                    <View style={styles.ratingContainer}>
                        <Image source={starLogo} style={styles.icon} />
                        <Text style={styles.rating}>{rating}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Image source={locationPinLogo} style={styles.icon} />
                        <Text style={styles.location}>{location}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.votesContainer}>
                <Text style={styles.votes}>{votes}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        marginRight: 10,
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
        marginBottom: 5,
    },
    ratingLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    rating: {
        fontSize: 14,
        color: '#585858',
        marginLeft: 5,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        fontSize: 14,
        color: '#999',
        marginLeft: 5,
    },
    icon: {
        width: 20,
        height: 20,
    },
    votesContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    votes: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});
