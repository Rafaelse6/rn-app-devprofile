import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { SignUp } from "./src/pages/SignUp/Index";

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
    <ThemeProvider theme={theme}>
      <SignUp />
    </ThemeProvider>
  );
};

export default App;
