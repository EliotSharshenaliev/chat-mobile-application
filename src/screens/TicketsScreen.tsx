import React from 'react';
import {Text, Button, View} from "react-native"
import {DrawerActions} from "@react-navigation/native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ticketsOption = {
    drawerIcon: (props: any) => {
        return <Icon name={"inbox"} {...props}/>
    }
}


export const TicketsScreen = ({ navigation }: {navigation: any}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Register')}
                title="Go to notifications"
            />

            <Button
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                title="Go to notifications"
            />
        </View>
    );
};
