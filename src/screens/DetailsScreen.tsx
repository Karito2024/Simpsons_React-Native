import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

const DetailsScreen = ({ route }: { route: any }) => {
  const { character } = route.params; // Recibir el personaje desde los parámetros

  return (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text>{character.title}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Año:</Text>
        <Text style={styles.value}>{character.year}</Text>
      </View>

      {character.genre ? (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Género:</Text>
          <Text style={styles.value}>{character.genre}</Text>
        </View>
      ) : null}

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Creador:</Text>
        <Text style={styles.value}>{character.creator}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Episodios:</Text>
        <Text style={styles.value}>{character.episode}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7fc5d9', // Fondo oscuro para mayor contraste
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125, // Hace la imagen circular
    borderWidth: 4,
    borderColor: '#0e1981', // Borde azul neón
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: '#141717',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00D1FF',
  },
  value: {
    fontSize: 18,
    color: '#FFF',
  },
});
