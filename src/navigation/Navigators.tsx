import React from 'react';
import { StackNavigator } from "./StackNavigators";
import { DrawerNavigator } from "./DrawerNavigators";
import { useAuth } from "../context/authContext";

export const Navigators = () => {
    const {authState} = useAuth()
    return authState?.authenticated ? <DrawerNavigator/> : <StackNavigator/>
};
