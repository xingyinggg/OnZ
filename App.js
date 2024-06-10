import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Login
import LoginPage from "./src/screens/login/loginPage";
import RegisterPage from "./src/screens/login/registerPage";
import ForgetPasswordPage from "./src/screens/forgetPasswordPage";
import TermsOfServicePage from "./src/screens/termsOfServicePage";

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
});
