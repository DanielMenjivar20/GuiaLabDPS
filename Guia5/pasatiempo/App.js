import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';

const pasatiempos = [
  {
    nombre: 'Jugar Videojuegos',
    descripcion: 'Me gusta jugar videojuegos para relajarme y divertirme.',
    src: require('./src/imagenes/juegos.jpg'),
  },
  {
    nombre: 'Practicar Fútbol',
    descripcion: 'Practicar fútbol me mantiene activo y me gusta competir.',
    src: require('./src/imagenes/futbol.jpg'),
  },
];

export default function App() {
  const [mensajeVisible, setMensajeVisible] = useState(false);

  const mostrarMensaje = (nombre) => {
    Alert.alert('¡Genial!', `¡Disfrutas mucho de ${nombre}!`);
  };

  return (
    <ScrollView style={styles.container}>
     {pasatiempos.map((p, i) => (
  <View key={i} style={styles.card}>
    <Text style={styles.titulo}>{p.nombre}</Text>
    <Image source={p.src} style={styles.imagen} />
    <Text style={styles.descripcion}>{p.descripcion}</Text>
    <Button
      title={`Me gusta ${p.nombre}`}
      onPress={() => mostrarMensaje(p.nombre)}
      color="#4CAF50"
    />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imagen: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

