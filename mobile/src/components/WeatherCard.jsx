import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherCard({ city, temp, condition, tip }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.city}>{city}</Text>
          <Text style={styles.temp}>{temp}°C - {condition}</Text>
        </View>
        <Text style={styles.icon}>☀️</Text>
      </View>
      <View style={styles.divider} />
      <Text style={styles.tip}>💡 AI Mashwara: {tip}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#2E7D32', padding: 20, borderRadius: 15, marginVertical: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  city: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  temp: { color: '#A5D6A7', fontSize: 16, marginTop: 5 },
  icon: { fontSize: 40 },
  divider: { height: 1, backgroundColor: '#A5D6A7', my: 15, opacity: 0.5, marginVertical: 15 },
  tip: { color: 'white', fontSize: 14, fontStyle: 'italic' }
});
