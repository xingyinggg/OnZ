import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import {Ionicons} from '@expo/vector-icons';

const PlaceDetailPage = ({ route, navigation }) => {
  const { card } = route.params;
  const [imageIndex, setImageIndex] = useState(0);

  const translateY = useSharedValue(0);

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % card.uri.length);
  };

  const handlePrevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + card.uri.length) % card.uri.length);
  };

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateY.value = event.translationY;
    },
    onEnd: () => {
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));


  return (
    <GestureHandlerRootView style={styles.container}>
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.content, animatedStyle]}>

        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close-circle-outline" size={45} color="#585858" />
        </TouchableOpacity>

        <Image source={typeof card.uri[imageIndex] === 'string' ? { uri: card.uri[imageIndex] } : card.uri[imageIndex]} style={styles.image} />

        <View style={styles.imageNavigation}>
          <TouchableOpacity onPress={handlePrevImage} style={styles.navButton}>
            <Ionicons name="chevron-back" size={40} color="#585858" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextImage} style={styles.navButton}>
                <Ionicons name="chevron-forward" size={40} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
            <ScrollView contentContainerStyle={styles.cardContent}>

              <View style={styles.cardInfo}>

                <View style={styles.cardDetails}>

                  <Text style={styles.cardText}>{card.text}</Text>
                  <Text style={styles.cardLocation}><Ionicons name="location-sharp" size={18} color="" />{card.location}</Text>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardRating}><Ionicons name="star-outline" size={18} color="black" /> {card.rating} Rating</Text>
                    <Text style={styles.cardPrice}>{card.price}</Text>
                  </View>

                  <Text style={styles.descriptionTitle}>About {card.text}</Text>
                  <Text style={styles.description}>{card.description}</Text>

                </View>

              </View>
            </ScrollView>
          </View>

      </Animated.View>
    </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 30,
    zIndex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 360,
    marginTop: -20, 
  },
  imageNavigation: {
    position: 'absolute',
    top: 150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginHorizontal: -140,
  },
  navButton: {
    marginHorizontal: 160, 
  },
  navButtonIcon: {
    backgroundColor: "DBE5E7",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  navText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  cardContainer: {
    position: 'absolute',
    top: 300,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 2,
    padding: 20,
  },
  cardContent: {
    paddingBottom: 20,
  },
  cardInfo: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    // padding: 5,
    // position: 'absolute',
  },
  cardDetails: {
    // marginTop: 5,
    marginLeft: 10,
  },
  cardText: {
    fontSize: 23,
    fontFamily: 'Karma-Bold'
  },
  cardLocation: {
    fontSize: 16,
    color: 'grey',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 10
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
  descriptionTitle:{
    fontSize: 15,
    fontFamily: 'Karma-Bold',
    color: 'black'
  },
  description: {
    fontSize: 15,
    color: '585858'
  },
});

export default PlaceDetailPage;