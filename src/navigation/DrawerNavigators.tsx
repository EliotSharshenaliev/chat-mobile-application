import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer"
import "react-native-gesture-handler"
import { ticketsOption, TicketsScreen } from "../screens/TicketsScreen";
import { DrawerContent } from "../components/DrawerContent";



const Drawer = createDrawerNavigator()
export const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Tickets" drawerContent={DrawerContent}>
                <Drawer.Screen name={"Tickets"} component={TicketsScreen} options={ticketsOption}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
