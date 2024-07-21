import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

// component import

const placeholderUri = 'https://via.placeholder.com/200';

const SwipingCard = ({ navigation, route }) => {
  const { events } = route.params;
  const [cards] = useState(events);

  const nopeOpacity = useSharedValue(10);
  const likeOpacity = useSharedValue(10);
  const [isSwipedAll, setIsSwipedAll] = useState(false);

  const renderCard = (event) => (
    <Animated.View key={event.eventID} style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('placeDetailPage', { event })}>
        <Image source={{uri: event.picture}} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <View style={styles.cardDetails}>
            <Text style={styles.cardText}>{event.eventName}</Text>
            <View style={styles.row}>
              <Ionicons name="location-outline" size={18} color="#A0CED9" />
              <Text style={styles.cardLocation}> {event.street}</Text>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.row}>
                <Ionicons name="star-outline" size={18} color="black" />
                <Text style={styles.cardRating}> {event.rating} / 5</Text>
              </View>
              <Text style={styles.cardPrice}>{event.priceRange}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );

  const swiperRef = useRef(null);

  const onSwipedLeft = (cardIndex) => {
    console.log('Nope: ${cards[cardIndex].text}');
    likeOpacity.value = withTiming(1);
    nopeOpacity.value = withTiming(1);
  };

  const onSwipedRight = (cardIndex) => {
    console.log('Liked: ${cards[cardIndex].text}');
    likeOpacity.value = withTiming(1);
    nopeOpacity.value = withTiming(1);
  };

  const onSwiping = (x) => {
    if (x < -70) {
      nopeOpacity.value = withTiming(1);
      likeOpacity.value = withTiming(0);
    } else if (x > 70) {
      likeOpacity.value = withTiming(1);
      nopeOpacity.value = withTiming(0);
    } else {
      likeOpacity.value = withTiming(1);
      nopeOpacity.value = withTiming(1);
    }
  };

  const nopeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: nopeOpacity.value,
  }));

  const likeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: likeOpacity.value,
  }));
  const onSwipedAll = () => {
    setIsSwipedAll(true);
    likeOpacity.value = withTiming(0);
    nopeOpacity.value = withTiming(0);
  };

  const handleNope = () => {
    swiperRef.current.swipeLeft();
  };

  const handleLike = () => {
    swiperRef.current.swipeRight();
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}>
        <BackButton navigation={navigation} />
      </View> */}
        {isSwipedAll ? (
          <Text style={styles.swipedAllText}>You have finished swiping!</Text>
        ) : (
          <Swiper
            ref={swiperRef}
            cards={cards}
            renderCard={(event, index) => renderCard(event, index)}
            onSwipedLeft={(cardIndex) => onSwipedLeft(cardIndex, 'left')}
            onSwipedRight={(cardIndex) => onSwipedRight(cardIndex, 'right')}
            onSwiping={(x) => onSwiping(x)}
            onSwipedAll={onSwipedAll}
            cardIndex={0}
            backgroundColor={'#f0f0f0'}
            stackSize={3}
            horizontalSwipe={true}
            verticalSwipe={false}
          />
        )}
  
      <View style={styles.bottomContainer}>
        <Animated.View style={[styles.iconContainer, nopeAnimatedStyle]}>
          <TouchableOpacity onPress={handleNope} style={[styles.iconContainer, styles.nope]}>
            <Ionicons name="close-circle" size={60} color="#585858" />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.iconContainer, likeAnimatedStyle]}>
          <TouchableOpacity onPress={handleLike} style={[styles.iconContainer, styles.like]}>
            <Ionicons name="checkmark-circle" size={60} color="#A0CED9" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardInfo: {
    width: '95%',
    height: 155,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
  },
  cardDetails: {
    marginTop: 5,
    marginLeft: 10
  },
  cardText: {
    fontSize: 23,
    fontFamily: 'Karma-Bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLocation: {
    fontSize: 16,
    color: 'grey',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  cardRating: {
    fontSize: 16,
    color: 'black',
  },
  cardPrice: {
    marginRight: 10,
    fontSize: 18,
    color: 'black',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderRadius: 30
  },
  iconText: {
      fontSize: 32,
      fontWeight: 'bold',
  },
  nope: {
    left: 20,
    color: '#585858',
  },
  like: {
    right: 20,
    color: '#A0CED9',
  },
  swipedAllText: {
    fontSize: 24,
    fontFamily: 'Karma-Bold',
    color: 'black',
  },
});

export default SwipingCard;