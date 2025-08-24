import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Reserva = ({ item, eliminarReserva }) => {
  const dialogoEliminar = id => {
    eliminarReserva(id);
  };

  return (
    <View style={styles.reserva}>
      <Text style={styles.label}>Cliente: </Text>
      <Text style={styles.texto}>{item.nombre}</Text>

      <Text style={styles.label}>Fecha: </Text>
      <Text style={styles.texto}>{item.fecha}</Text>

      <Text style={styles.label}>Hora: </Text>
      <Text style={styles.texto}>{item.hora}</Text>

      <Text style={styles.label}>Personas: </Text>
      <Text style={styles.texto}>{item.personas}</Text>

      <Text style={styles.label}>Sección: </Text>
      <Text style={styles.texto}>{item.seccion}</Text>

      <TouchableHighlight onPress={() => dialogoEliminar(item.id)} style={styles.btnEliminar}>
        <Text style={styles.textoEliminar}>Eliminar ×</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  reserva: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  texto: {
    fontSize: 16,
  },
  btnEliminar: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  textoEliminar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Reserva;
