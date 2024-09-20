const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge4 from "./screens/AndroidLarge4";
import AndroidLarge11 from "./screens/AndroidLarge11";
import AndroidLarge12 from "./screens/AndroidLarge12";
import AndroidLarge8 from "./screens/AndroidLarge8";
import AndroidLarge7 from "./screens/AndroidLarge7";
import AndroidLarge5 from "./screens/AndroidLarge5";
import AndroidLarge3 from "./screens/AndroidLarge3";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge1 from "./screens/AndroidLarge1";
import AndroidLarge10 from "./screens/AndroidLarge10";
import AndroidLarge9 from "./screens/AndroidLarge9";
import AndroidLarge2 from "./screens/AndroidLarge2";
import AndroidLarge from "./screens/AndroidLarge";
import Search from "./components/Search";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="AndroidLarge4"
              component={AndroidLarge4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge11"
              component={AndroidLarge11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge12"
              component={AndroidLarge12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge8"
              component={AndroidLarge8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge7"
              component={AndroidLarge7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge5"
              component={AndroidLarge5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge6"
              component={AndroidLarge6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge10"
              component={AndroidLarge10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge9"
              component={AndroidLarge9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge2"
              component={AndroidLarge2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge"
              component={AndroidLarge}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
