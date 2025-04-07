import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../types/character';
import CharacterCard from '../components/CharacterCard';
import api from '../api/api';

const HomeScreen = () => {
  const [featuredCharacters, setFeaturedCharacters] = React.useState<Character[]>([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchFeaturedCharacters = async () => {
      try {
        const { data } = await api.get('/cartoons2D');
        // Tomamos solo los primeros 3 como destacados
        setFeaturedCharacters(data.slice(0, 3));
      } catch (error) {
        console.error('Error al obtener personajes destacados:', error);
      }
    };

    fetchFeaturedCharacters();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personajes Destacados</Text>
      
      {featuredCharacters.map((character) => (
        <CharacterCard 
          key={character.id} 
          character={character} 
          navigation={navigation} 
        />
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bienvenido a la App de Dibujos Animados</Text>
        <Text style={styles.description}>
          Explora una colección de los dibujos animados más icónicos de todos los tiempos.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});

export default HomeScreen;