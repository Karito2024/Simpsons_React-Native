import React, { useEffect, useState } from 'react'; // Importa React y hooks para gestionar estado y efectos
import { ScrollView, Text } from 'react-native'; // Importa componentes de React Native
import { useNavigation } from '@react-navigation/native'; // Hook para la navegación
import { Character } from '../types/character'; // Importa el tipo de datos Character
import global from '../styles/global'; // Importa estilos globales
import api from '../api/api'; // Importa la instancia de la API
import CharacterCard from '../components/CharacterCard';
 // Importa el componente de tarjeta de personaje


export default function InicioScreen(){
    const [characters, setCharacters] = useState<Character[]>([]); // Estado para almacenar los personajes
    const navigation = useNavigation(); // Obtiene el objeto de navegación

    useEffect(() => {
        // Función asíncrona para obtener los personajes desde la API
        const fetchCharacter = async () => {
          const { data: { results } } = await api.get<{ results: Character[] }>('/character'); 
          // Realiza la petición GET a la API y extrae los resultados
    
          setCharacters(results); // Guarda los personajes en el estado
        };
        fetchCharacter(); // Llama a la función cuando el componente se monta
      }, []);
    
      return (
        <ScrollView style={global.container}>
          {/* Contenedor desplazable que usa los estilos globales */}
    
          <Text style={global.tittle}>Fábulas Clásicas</Text>
          {/* Título principal de la pantalla */}
    
          {characters.map((c) => (
            <CharacterCard key={c.id} character={c} navigation={navigation} />
            // Renderiza una tarjeta por cada personaje obtenido de la API
          ))}
        </ScrollView>
      );
}