import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Splash screen
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Login
import LoginPage from "./src/screens/login/loginPage";
import RegisterPage from "./src/screens/login/registerPage";
import ForgetPasswordPage from "./src/screens/passwords/forgetPasswordPage";
import TermsOfServicePage from "./src/screens/termsOfServicePage";
import VerifyEmailPage from './src/screens/passwords/verifyEmail';
import NewPasswordPage from './src/screens/passwords/newPasswordPage';

//  Home pages
import HomePage from './src/screens/homePage';
import ListingPage from './src/screens/listingPage';


// 
import AccountPage from './src/screens/accountPage';
import CreateOutingsPage from './src/screens/createOutingsPage';
import LikesPage from './src/screens/likesPage';
import OutingsPage from './src/screens/outingsPage';
import PlaceDetailPage from './src/screens/placeDetailPage';
import SearchFilterPage from './src/screens/searchFilterPage';
import OutingsFilterPage from './src/screens/outingsFilterPage';
import CodePage from './src/screens/codePage';


export default function App() {

  // Declare fonts to be used
  const [fontsLoaded] = useFonts({
    "Karma-Regular": require("./src/assets/fonts/Karma-Regular.ttf"),
    "Karma-Bold": require("./src/assets/fonts/Karma-Bold.ttf"),
    "Karma-Light": require("./src/assets/fonts/Karma-Light.ttf"),
    "Karma-Medium": require("./src/assets/fonts/Karma-Medium.ttf"),
    "Karma-SemiBold": require("./src/assets/fonts/Karma-SemiBold.ttf"),
  });

  // Check if fonts are loaded
  if (fontsLoaded) {
    console.log("fonts loaded");
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    hideSplash();
  } else {
    console.log("font not loaded");
    return null;
  }

  // Create a stack navigator
  const Stack = createNativeStackNavigator();

  return (
    // NavigationContainer is the root container for the navigation tree
    <NavigationContainer>
       {/* Stack.Navigator is a stack of screens */}
      <Stack.Navigator
        initialRouteName="loginPage"
      >

        {/* Insert your screens here */}
        {/* <Stack.Screen 
          name="splashPage" 
          component={SplashPage} 
        /> */}

        <Stack.Screen 
          name="loginPage" 
          component={LoginPage} 
        />

        <Stack.Screen
          name="registerPage"
          component={RegisterPage}
        />

        <Stack.Screen
          name="forgetPasswordPage"
          component={ForgetPasswordPage}
        />

        <Stack.Screen
          name="termsOfServicePage"
          component={TermsOfServicePage}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('./src/assets/commons/back_logo.png')} 
                  style={styles.backButtonImage}
                />
              </TouchableOpacity>
            ),
            // headerTitle: "Terms of Services and Privacy Policy",
            // headerTitleAlign: 'center',
          })}
        />

        <Stack.Screen
          name="homePage"
          component={HomePage}
        />

        <Stack.Screen
          name="listingPage"
          component={ListingPage}
        />

        <Stack.Screen
          name="verifyEmailPage"
          component={VerifyEmailPage}
        />

        <Stack.Screen
          name="newPasswordPage"
          component={NewPasswordPage}
        />

        <Stack.Screen
          name="outingsPage"
          component={OutingsPage}
        />

        <Stack.Screen
          name="createOutingsPage"
          component={CreateOutingsPage}
        />

        <Stack.Screen
          name="likesPage"
          component={LikesPage}
        />

        <Stack.Screen
          name="accountPage"
          component={AccountPage}
        />

        <Stack.Screen 
          name="placeDetailsPage"
          component={PlaceDetailPage}
        />

        <Stack.Screen 
          name="searchFilterPage"
          component={SearchFilterPage}
        />

        <Stack.Screen 
          name="codePage"
          component={CodePage}
        />

        <Stack.Screen
          name='outingsFilterPage'
          component={OutingsFilterPage}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonImage: {
    width: 25, 
    height: 25 

  },
});
