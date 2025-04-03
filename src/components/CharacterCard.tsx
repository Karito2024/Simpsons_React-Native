import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Character } from '../types/character';

const CharacterCard=({character,navigation}:{character:Character,navigation:any})=>{
    const handlePress=()=>{
        navigation.navigate('Detalles', {character});
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <Image source={{uri: character.image}} style={styles.image}/>
            <View style={styles.card}>
                <Text style={styles.title}>{character.title}</Text>
                <Text style={styles.creator}>{character.creator}</Text>
            </View>
        </TouchableOpacity>
    )
};
export default CharacterCard;

const styles = StyleSheet.create({
    card: {
      marginBottom: 10, // Espaciado inferior entre tarjetas
      padding: 10, // Espaciado interno
      backgroundColor: 'white', // Fondo blanco
      borderRadius: 10, // Bordes redondeados
    },
    image: {
      width: '100%', // Imagen ocupa todo el ancho del contenedor
      height: 200, // Altura fija de 200px
      borderRadius: 10, // Bordes redondeados
    },
    title: {
      fontSize: 18, // Tamaño de fuente grande para el nombre
      fontWeight: 'bold', // Texto en negrita
      marginTop: 5, // Espaciado superior
    },
    creator:{
        fontSize: 16, // Tamaño de fuente pequeño para el creador
      marginTop: 5, // Espaciado superior
    }
  });
  