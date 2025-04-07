import React, { useEffect, useState } from 'react'; // Importa React y hooks para manejar estado y efectos
import { ScrollView, Text } from 'react-native'; // Componentes nativos de React Native
import { useNavigation } from '@react-navigation/native'; // Hook para navegación entre pantallas
import { Character } from '../types/character'; // Tipo de datos para los personajes
import global from '../styles/global'; // Estilos globales
import api from '../api/api'; // Instancia personalizada de axios
import CharacterCard from '../components/CharacterCard'; // Componente para mostrar un personaje

export default function InicioScreen() {
  const [characters, setCharacters] = useState<Character[]>([]); // Estado para almacenar los personajes
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  // Hook que se ejecuta al montar el componente
  useEffect(() => {
    // Función asíncrona para traer los personajes de la API
    const fetchCharacter = async () => {
      try {
        const { data } = await api.get<Character[]>('/cartoons2D'); // Llama a la API y obtiene un array de personajes
        setCharacters(data); // Guarda los personajes en el estado
      } catch (error) {
        console.error('Error al obtener personajes:', error); // En caso de error lo muestra en consola
      }
    };

    fetchCharacter(); // Llama a la función de carga
  }, []);

  return (
    <ScrollView style={global.container}>
      {/* Contenedor con scroll y estilo global */}
      <Text style={global.tittle}>Fábulas Clásicas</Text>
      {/* Título de la pantalla */}

      {characters.map((c) => (
        <CharacterCard key={c.id} character={c} navigation={navigation} />
        // Renderiza una tarjeta por cada personaje
      ))}
    </ScrollView>
  );
}
