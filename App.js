/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from 'expo-font';

// screens
import {
    OnBoarding,
} from "./app/screens/";

// screen for stack & tabs
const Stack = createStackNavigator();
const App = () => {

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        // Load the custom font asynchronously
        const loadFont = async () => {
          await Font.loadAsync({
            'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Black': require('./app/assets/fonts/Roboto-Black.ttf'),
            'Roboto-Bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
            // Add more custom fonts here if needed
          });
          setFontLoaded(true);
        };
    
        loadFont();
      }, []);

      if (!fontLoaded) {
        // Return a loading screen or null while the font is loading
        return null;
      }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Onboarding screen */}
                <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    return <App />;
};