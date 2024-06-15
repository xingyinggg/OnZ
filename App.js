import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


// Login
import LoginPage from "./src/screens/login/loginPage";
import RegisterPage from "./src/screens/login/registerPage";
import ForgetPasswordPage from "./src/screens/forgetPasswordPage";
import TermsOfServicePage from "./src/screens/termsOfServicePage";
import VerifyEmailPage from './src/screens/verifyEmail';
import NewPasswordPage from './src/screens/newPasswordPage';

//  Home pages
import HomePage from './src/screens/homePage';
import FoodCategoryPage from './src/screens/categories/foodCategoryPage';
import CraftsCategoryPage from './src/screens/categories/craftsCategoryPage';
import PetsCategoryPage from './src/screens/categories/petsCategoryPage';
import OutdoorsCategoryPage from './src/screens/categories/outdoorsCategoryPage';
import SportsCategoryPage from './src/screens/categories/sportsCategoryPage';
import EntertainmentCategoryPage from './src/screens/categories/entertainmentCategoryPage';
import CulturesCategoryPage from './src/screens/categories/culturesCategoryPage';

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
          name="foodCategoryPage"
          component={FoodCategoryPage}
        />

        <Stack.Screen
          name="craftsCategoryPage"
          component={CraftsCategoryPage}
        />

        <Stack.Screen
          name="petsCategoryPage"
          component={PetsCategoryPage}
        />

        <Stack.Screen
          name="outdoorsCategoryPage"
          component={OutdoorsCategoryPage}
        />

        <Stack.Screen
          name="sportsCategoryPage"
          component={SportsCategoryPage}
        />

        <Stack.Screen
          name="entertainmentCategoryPage"
          component={EntertainmentCategoryPage}
        />

        <Stack.Screen
          name="culturesCategoryPage"
          component={CulturesCategoryPage}
        />

        <Stack.Screen
          name="verifyEmailPage"
          component={VerifyEmailPage}
        />

        <Stack.Screen
          name="newPasswordPage"
          component={NewPasswordPage}
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
