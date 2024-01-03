import React from 'react';
import { View, StyleSheet, SafeAreaView } from "react-native"
import { DrawerContentComponentProps,DrawerItem, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    useTheme
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerNotFinishedItem from "./DrawerNotFinishedItem";
import { useAuth } from "../context/authContext";

export function DrawerContent({
                                  descriptors,
                                  state,
                                  ...rest
                              }: DrawerContentComponentProps) {
    const focusedRoute = state.routes[state.index];
    const focusedDescriptor = descriptors[focusedRoute.key];
    const focusedOptions = focusedDescriptor.options;

    const {drawerContentStyle, drawerContentContainerStyle} = focusedOptions;
    const paperTheme = useTheme();
    const {onLogout} = useAuth()

    const handleLogout = async () => {
        try {
            if (onLogout){
                await onLogout()
            }
        }finally {

        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={{
                            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                        }}
                        size={50}
                    />
                    <View style={{marginLeft: 15, flexDirection: 'column'}}>
                        <Title style={styles.title}>John Doe</Title>
                        <Caption style={styles.caption}>Shift Manager</Caption>
                    </View>
                </View>
            </View>

            <DrawerContentScrollView

                {...rest}
                contentContainerStyle={drawerContentContainerStyle}
                style={drawerContentStyle}
            >
                <DrawerItemList descriptors={descriptors} state={state} {...rest} />
                <DrawerNotFinishedItem label={"Notification (Soon)"}/>
                <DrawerNotFinishedItem label={"Operation Team (Soon)"}/>
                <DrawerNotFinishedItem label={"Billing (Soon)"}/>
                <DrawerNotFinishedItem label={"Leaves (Soon)"}/>
                <DrawerNotFinishedItem label={"Settings (Soon)"}/>

            </DrawerContentScrollView>
            <SafeAreaView>
                <DrawerItem
                    icon={({size}) => (
                        <Icon
                            name="exit-to-app"
                            color={"red"}
                            size={size}
                        />
                    )}
                    labelStyle = {{
                        color: "red"
                    }}
                    label="Sign Out"
                    onPress={handleLogout}
                />
            </SafeAreaView>
</SafeAreaView>
)
    ;
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },


});
