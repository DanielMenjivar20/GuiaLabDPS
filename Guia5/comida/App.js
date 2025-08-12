import React from 'react';
import { AppRegistry } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
const DATA = [
 {
 id: '1',
 title: 'Pupusas',
 calorias: 250,
 src:require('./src/imagenes/pupusas.jpg'),
 },
 {
 id: '2',
 title: 'Yuca',
 calorias: 350,
 src:require('./src/imagenes/yuca.jpg'),
 },
 {
 id: '3',
 title: 'Sopa de pata',
calorias: 250,
 src:require('./src/imagenes/sopadepata.jpg'),
 },
];
const Item = ({ title, img, calorias }) => (
 <View style={styles.item}>
  <Image style={styles.img} source={img}/>
 <Text style={styles.title}>{title}</Text>
 <Text style={styles.calorias}>Calorías: {calorias}</Text>
 </View>
);
export default function App() {
 const renderItem = ({ item }) => (
 <Item title={item.title} img={item.src} calorias={item.calorias} />
 );
 return (
<SafeAreaView style={styles.container}>
 <FlatList
 data={DATA}
 renderItem={renderItem}
 keyExtractor={item => item.id}
 />
 </SafeAreaView>
 );
}

const styles = StyleSheet.create({
   container: {
 flex: 1,
 marginTop: StatusBar.currentHeight || 0,
 },
 item: {
 backgroundColor: '#cacde4ff',
 padding: 20,
 marginVertical: 8,
 marginHorizontal: 16,
 alignItems: 'center',
 },
 title: {
 fontSize: 32,
 },
 img: {
 width: 200,
 height: 125,
 borderWidth: 2,
 resizeMode: 'contain',
 margin:8
 }
});

