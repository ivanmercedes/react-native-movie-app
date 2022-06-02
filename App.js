import React, { useRef } from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import HomeScreen from "./src/screens/Home";
import MovieScreen from "./src/screens/MoviesDetails";
import { ThemeProvider } from "react-native-elements";
import VideoPlayer from "./src/screens/VideoPlayer";

const Stack = createStackNavigator();

const theme = {
  colors: {
    primary: "#000000",
  },
};

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current = navigationRef.getCurrentRoute().name;
        }}
        onStateChange={async () => {
          const previousRouteName = routeNameRef.current;
          const currentRouteName = navigationRef.getCurrentRoute().name;

          if (previousRouteName === "VideoPlayer") {
            ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.PORTRAIT,
            );
          }

          routeNameRef.current = currentRouteName;
        }}
      >
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#da1f1f",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Notflix",
              headerTitleAlign: "center",
              // headerShadowVisible: false, // applied here
              // headerBackTitleVisible: false,

              headerLeft: () => (
                <Text
                  style={{ marginLeft: 15 }}
                  onPress={() => console.log("menu")}
                >
                  <EvilIcons name="navicon" size={30} color="white" />
                </Text>
              ),
              headerRight: () => (
                <Text
                  style={{ marginRight: 15 }}
                  onPress={() => console.log("buscando")}
                >
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
              // headerShadowVisible: false, // applied here
              // headerBackTitleVisible: false,
            }}
            colors={["transparent", "transparent", "#111111c1", "#111111f6"]}
            name="MovieDetailsScreen"
            component={MovieScreen}
          />

          <Stack.Screen
            options={{
              headerTintColor: "#fff",
              title: "",
              ...TransitionPresets.SlideFromRightIOS,
            }}
            name="VideoPlayer"
            component={VideoPlayer}
          />
        </Stack.Navigator>

        <StatusBar style="light" animated={true} />
      </NavigationContainer>
    </ThemeProvider>
  );
}
