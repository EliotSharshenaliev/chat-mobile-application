import React from 'react';
import {DrawerItem} from "@react-navigation/drawer"
const DrawerNotFinishedItem = ({label}: {label: string}) => {
    return (
        <DrawerItem
            activeBackgroundColor={"transparent"}
            inactiveTintColor={'gray'}
            labelStyle={{color: "gray"}}
            label={label}
            icon={() => null}
            onPress={() => {}}
            pressColor={'gray'}
            pressOpacity={5}
        />
    );
};

export default DrawerNotFinishedItem;