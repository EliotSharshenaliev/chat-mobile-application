import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack"
import "react-native-gesture-handler"
import { LoginScreen } from "../screens/LoginScreen";



const Stack = createStackNavigator()
export const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Login"} component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

