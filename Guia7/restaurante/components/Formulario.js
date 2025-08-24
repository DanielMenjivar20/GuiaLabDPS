import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from "react-id-generator";
import colors from '../src/utils/colors';

const Formulario = ({ reservas, setReservas, guardarMostrarForm, guardarReservasStorage }) => {
  const [nombre, guardarNombre] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [personas, guardarPersonas] = useState('');
  const [seccion, guardarSeccion] = useState('No fumadores');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const confirmarFecha = date => {
    const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const confirmarHora = hora => {
    const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
    guardarHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };

  const crearNuevaReserva = () => {
    if (nombre.trim() === '' || fecha.trim() === '' || hora.trim() === '' || personas.trim() === '') {
      Alert.alert('Error', 'Todos los campos son obligatorios', [{ text: 'OK' }]);
      return;
    }

    const reserva = { nombre, fecha, hora, personas, seccion };
    reserva.id = shortid();

    const reservasNuevas = [...reservas, reserva];
    setReservas(reservasNuevas);
    guardarReservasStorage(JSON.stringify(reservasNuevas));
    guardarMostrarForm(false);

    guardarNombre('');
    guardarFecha('');
    guardarHora('');
    guardarPersonas('');
    guardarSeccion('No fumadores');
  };

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.label}>Nombre del cliente:</Text>
        <TextInput style={styles.input} onChangeText={guardarNombre} value={nombre} />
      </View>

      <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={confirmarFecha}
          onCancel={hideDatePicker}
          locale='es_ES'
        />
        <Text>{fecha}</Text>
      </View>

      <View>
        <Text style={styles.label}>Hora:</Text>
        <Button title="Seleccionar Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={confirmarHora}
          onCancel={hideTimePicker}
          locale='es_ES'
        />
        <Text>{hora}</Text>
      </View>

      <View>
        <Text style={styles.label}>Cantidad de Personas:</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={guardarPersonas} value={personas} />
      </View>

      <View>
        <Text style={styles.label}>Sección (Fumadores/No fumadores):</Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableHighlight
            style={[styles.btnSeccion, { backgroundColor: seccion === "Fumadores" ? colors.BUTTON_COLOR : "#ccc" }]}
            onPress={() => guardarSeccion("Fumadores")}
          >
            <Text>Fumadores</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.btnSeccion, { backgroundColor: seccion === "No fumadores" ? colors.BUTTON_COLOR : "#ccc" }]}
            onPress={() => guardarSeccion("No fumadores")}
          >
            <Text>No fumadores</Text>
          </TouchableHighlight>
        </View>
      </View>

      <TouchableHighlight onPress={crearNuevaReserva} style={styles.btnSubmit}>
        <Text style={styles.textoSubmit}>Crear Nueva Reserva</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 10,
  },
  btnSubmit: {
    backgroundColor: colors.PRIMARY_COLOR,
    padding: 10,
    marginVertical: 20,
  },
  textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnSeccion: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default Formulario;
