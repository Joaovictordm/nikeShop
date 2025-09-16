import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screen/homeScreen";
import LoginScreen from "../screen/loginScreen";
import StartScreen from "../screen/startScreen";
import React from "react";

export default function Silksong(){
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                name = "start"
                component = {StartScreen}
                options = {{headerTransparent: true}}
                />
            
                <Stack.Screen
                name = "login"
                component = {LoginScreen}
                options = {{headerShown: false}}
                />

                <Stack.Screen
                name = "Home"
                component = {HomeScreen}
                options = {{headerShown: false}}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}