import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';

const temasIA = [
  {
    titulo: '¿Qué es la Inteligencia Artificial?',
    descripcion:
      'La Inteligencia Artificial (IA) es una rama de la informática que crea sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
  },
  {
    titulo: 'Aprendizaje Automático',
    descripcion:
      'El aprendizaje automático es una subdisciplina de la IA que permite a las máquinas aprender de los datos y mejorar con la experiencia sin ser programadas explícitamente.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1055/1055689.png',
  },
  {
    titulo: 'Redes Neuronales',
    descripcion:
      'Las redes neuronales son modelos inspirados en el cerebro humano que permiten a las máquinas reconocer patrones complejos y tomar decisiones.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1055/1055678.png',
  },
  {
    titulo: 'Aplicaciones de la IA',
    descripcion:
      'La IA se usa en reconocimiento de voz, vehículos autónomos, diagnósticos médicos, asistentes virtuales y mucho más.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/1055/1055667.png',
  },
];

export default function App() {
  const [temaActivo, setTemaActivo] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tituloPrincipal}>Información sobre Inteligencia Artificial</Text>

      {temasIA.map((tema, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => setTemaActivo(temaActivo === index ? null : index)}>
            <View style={styles.headerCard}>
              <Image source={{ uri: tema.imagen }} style={styles.icono} />
              <Text style={styles.titulo}>{tema.titulo}</Text>
            </View>
          </TouchableOpacity>

          {temaActivo === index && (
            <View style={styles.descripcionContainer}>
              <Text style={styles.descripcion}>{tema.descripcion}</Text>
              <Text
                style={styles.link}
                onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Inteligencia_artificial')}
              >
                Más información en Wikipedia
              </Text>
            </View>
          )}
        </View>
      ))}

     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  tituloPrincipal: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1D3557',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icono: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#457B9D',
    flexShrink: 1,
  },
  descripcionContainer: {
    marginTop: 10,
  },
  descripcion: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  link: {
    color: '#1D3557',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    color: '#777',
  },
});
