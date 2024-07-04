import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView , } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, withSpring } from 'react-native-reanimated';
import {Ionicons} from '@expo/vector-icons';
import Clipboard from '@react-native-community/react-native-clipboard';
import { A } from '@expo/html-elements';


const PlaceDetailPage = ({ route, navigation }) => {
  const { card } = route.params;
  const [imageIndex, setImageIndex] = useState(0);

  const copyToClipboard = (text) => {
    Clipboard.setString(text);
  };

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
      <View style={styles.imageContainer}>
      {/* <PanGestureHandler onGestureEvent={gestureHandler}> */}
        {/* <Animated.View style={[styles.imageWrapper, animatedStyle]}> */}

          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={35} color="#585858" />
          </TouchableOpacity>

          <Image source={typeof card.uri[imageIndex] === 'string' ? { uri: card.uri[imageIndex] } : card.uri[imageIndex]} style={styles.image} />

          <View style={styles.imageNavigation}>
            <TouchableOpacity onPress={handlePrevImage} style={styles.navButton}>
              <View style={styles.navButtonIcon}>
              <Ionicons name="chevron-back" size={35} color="#585858" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNextImage} style={styles.navButton}>
              <View style={styles.navButtonIcon} >
                <Ionicons name="chevron-forward" size={35} color="#585858" />
              </View>
            </TouchableOpacity>
          </View>

          {/* </Animated.View> */}
          {/* </PanGestureHandler> */}
          </View>
        <View style={styles.cardContainer}>
            <ScrollView contentContainerStyle={styles.cardContent}>

              <View style={styles.cardInfo}>

                <View style={styles.cardDetails}>
                <Text style={styles.cardText}>{card.text}</Text>
                <View style={styles.row}>
                  <Ionicons name="location-outline" size={18} color="#A0CED9" />
                  <Text style={styles.cardLocation}> {card.location}</Text>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.row}>
                    <Ionicons name="star-outline" size={18} color="black" /> 
                    <Text style={styles.cardRating}> {card.rating} / 5</Text>
                  </View>
                  <View style={styles.priceTag}>
                    <Text style={styles.cardPrice}>{card.price}</Text>
                  </View>
                </View>

                  <Text style={styles.descriptionTitle}>About {card.text}</Text>
                  <Text style={styles.description}>{card.description}</Text>

                  <Text style={styles.descriptionTitle}>Address</Text>
                  
                  <TouchableOpacity style={styles.row} onPress={copyToClipboard(card.fullLocation)}>
                    <Text style={styles.fullAddress}>{card.fullLocation}</Text>
                    <Ionicons name='copy'size={20} color="#A0CED9" style={styles.copyIcon}/>
                  </TouchableOpacity>

                  <Text style={styles.descriptionTitle}>Website</Text>
                  <A href="https://google.com" style={styles.website}>Go to Google</A>
              
                </View>

              </View>
            </ScrollView>
          </View>
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
  imageContainer: {
    width: Dimensions.get('window').width,
    height: '60%',
    zIndex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 20,
    zIndex: 1,
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width:"100%",
    height: '100%',
    marginTop: -20, 

  },
  imageNavigation: {
    position: 'absolute',
    top: "40%",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
   //marginHorizontal: -140
    
  },
  navButton:{
    marginHorizontal: 10,
  },
  navButtonIcon: {
    // marginHorizontal: 5,
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center'
  },
  
  navText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  cardContainer: {
    position: 'absolute',
    top: '50%',
    width: Dimensions.get('window').width,
    height: '55%',
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
    // width: '100%',
    // padding: 5,
    // position: 'absolute',
  },
  cardDetails: {
    // marginTop: 5,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  priceTag: {
    position: 'absolute',
    right: 5,
    backgroundColor: '#FFEE93',
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
},
  cardPrice: {
    fontSize: 16,
    color: 'black',
  },
  descriptionTitle:{
    fontSize: 15,
    fontFamily: 'Karma-Bold',
    color: 'black'
  },
  description: {
    fontSize: 15,
    color: '#585858',
    marginBottom: 18,
  },
  fullAddress: {
    fontSize: 15,
    color: '#585858',
    marginBottom: 18,
    width: "90%"
  },
  copyIcon: {
    top: "-3%",
  },
  website: {
    textDecorationLine: 'underline'
  }
});

export default PlaceDetailPage;