import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home";
import MovieScreen from "./src/screens/MoviesDetails";
import { ThemeProvider } from "react-native-elements";

const Stack = createStackNavigator();

const theme = {
    colors: {
      primary: "#1b1c1f",
    }
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerTitleAlign: "center",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#000000",
          },
          headerTintColor: "#da1f1f",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Netflix",
            headerTitleAlign: "center",
            headerLeft: () => (
              <Text
                style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                onPress={() => console.log("menu")}
              >
                <EvilIcons name="navicon" size={30} color="white" />
              </Text>
            ),
            headerRight: () => (
              <Text onPress={() => console.log("buscando")}>
                <EvilIcons name="search" size={30} color="white" />
              </Text>
            ),
          }}
        />
        <Stack.Screen
          options={{
            headerTintColor: "#fff",
            title: "",
            ...TransitionPresets.SlideFromRightIOS,
            
          }}
          name="MovieDetailsScreen"
          component={MovieScreen}
        />
      </Stack.Navigator>

      <StatusBar style="light" animated={true} />
    </NavigationContainer>
    </ThemeProvider>
  );
}
