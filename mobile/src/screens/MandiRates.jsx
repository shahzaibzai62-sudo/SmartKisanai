import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const MANDI_DATA = [
  { id: '1', crop: 'Gandum (Wheat)', price: '4000', unit: 'per 40kg', trend: 'up' },
  { id: '2', crop: 'Kapas (Cotton)', price: '8500', unit: 'per 40kg', trend: 'down' },
  { id: '3', crop: 'Chawal (Rice)', price: '3200', unit: 'per 40kg', trend: 'same' },
  { id: '4', crop: 'Ganna (Sugarcane)', price: '400', unit: 'per 40kg', trend: 'up' },
];

export default function MandiRates() {
  const [city, setCity] = useState('Multan');

  const renderItem = ({ item }) => (
    <View style={styles.rateCard}>
      <View>
        <Text style={styles.cropName}>{item.crop}</Text>
        <Text style={styles.unit}>{item.unit}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>Rs. {item.price}</Text>
        <Text style={item.trend === 'up' ? styles.trendUp : styles.trendDown}>
          {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : '-'}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mandi Rates</Text>
        <TouchableOpacity style={styles.citySelector}>
          <Text style={styles.cityText}>{city} ▼</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.dateText}>Aaj ke rates: 15 May 2026</Text>

      <FlatList
        data={MANDI_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, marginTop: 10 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20' },
  citySelector: { backgroundColor: '#e8f5e9', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
  cityText: { color: '#2E7D32', fontWeight: 'bold' },
  dateText: { color: 'gray', marginBottom: 20, fontSize: 14 },
  rateCard: { backgroundColor: 'white', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, elevation: 2 },
  cropName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  unit: { color: 'gray', fontSize: 12 },
  priceContainer: { alignItems: 'flex-end' },
  price: { fontSize: 18, fontWeight: 'bold', color: '#1B5E20' },
  trendUp: { color: 'green', fontSize: 16 },
  trendDown: { color: 'red', fontSize: 16 }
});
