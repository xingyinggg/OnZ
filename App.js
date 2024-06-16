import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Splash screen
// import SplashPage from "./src/screens/splashPage";

// Login
import LoginPage from "./src/screens/login/loginPage";
import RegisterPage from "./src/screens/login/registerPage";
import ForgetPasswordPage from "./src/screens/forgetPasswordPage";
import TermsOfServicePage from "./src/screens/termsOfServicePage";
import VerifyEmailPage from './src/screens/verifyEmail';
import NewPasswordPage from './src/screens/newPasswordPage';

//  Home pages
import HomePage from './src/screens/homePage';
import ListingPage from './src/screens/listingPage';

// 
import AccountPage from './src/screens/accountPage';
import CreateOutingsPage from './src/screens/createOutingsPage';
import LikesPage from './src/screens/likesPage';
import OutingsPage from './src/screens/outingsPage';
import PlaceDetailPage from './src/screens/placeDetailPage';
import FilterPage from './src/screens/filterPage';


export default function App() {

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
          name="filterPage"
          component={FilterPage}
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
