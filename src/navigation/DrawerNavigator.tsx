import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import 'react-native-gesture-handler';
import InicioScreen from '../screens/InicioScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Inicio" component={InicioScreen} />
            <Drawer.Screen name="Detalles" component={DetailsScreen} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;