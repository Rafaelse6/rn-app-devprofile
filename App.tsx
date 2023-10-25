import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";
import { StatusBar } from "react-native";

const App: React.FunctionComponent = () => {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" translucent />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
