import { createDrawerNavigator } from '@react-navigation/drawer'; // Importa el navegador tipo Drawer
import React from 'react';
import DetailsScreen from '../screens/DetailsScreen'; // Pantalla de detalles
import 'react-native-gesture-handler';
import InicioScreen from '../screens/InicioScreen';

const Drawer = createDrawerNavigator(); // Crea el navegador tipo Drawer

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Inicio">
            {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
            <Drawer.Screen name="Inicio" component={InicioScreen} />
            <Drawer.Screen name="Detalles" component={DetailsScreen} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigator;