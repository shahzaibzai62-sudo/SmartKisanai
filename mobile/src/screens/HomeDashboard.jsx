import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather, getWeatherTip } from '../services/weatherApi';

export default function HomeDashboard({ navigation }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    // Default coordinates for Multan, PK (Can be replaced with actual GPS logic)
    const loadWeather = async () => {
      const data = await fetchWeather(30.1978, 71.4697); 
      if (data) {
        setWeatherData(data);
      }
      setLoadingWeather(false);
    };
    loadWeather();
  }, []);

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Khush Aamdeed,</Text>
        <Text style={styles.name}>Kisan Bhai</Text>
      </View>

      {/* Weather Section */}
      {loadingWeather ? (
        <ActivityIndicator size="large" color="#2E7D32" style={{ marginVertical: 20 }} />
      ) : weatherData ? (
        <WeatherCard 
          city={weatherData.city}
          temp={weatherData.temp}
          condition={weatherData.condition}
          tip={getWeatherTip(weatherData.condition, weatherData.temp)}
        />
      ) : (
        <View style={styles.weatherCard}>
          <Text style={styles.weatherTitle}>Mausam ki maloomat dastiyab nahi</Text>
        </View>
      )}

      {/* Quick Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Mandi')}
        >
          <Text style={styles.actionIcon}>📈</Text>
          <Text style={styles.actionText}>Mandi Rates</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('AI Madad')}
        >
          <Text style={styles.actionIcon}>🤖</Text>
          <Text style={styles.actionText}>AI Madad</Text>
        </TouchableOpacity>
      </View>

      {/* Reminder Section */}
      <Text style={styles.sectionTitle}>Aaj ke Kaam</Text>
      <View style={styles.reminderCard}>
        <Text style={styles.reminderIcon}>💧</Text>
        <View>
          <Text style={styles.reminderTitle}>Gandum ko pani dein</Text>
          <Text style={styles.reminderTime}>Sham 5:00 baje</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2', padding: 15 },
  header: { marginBottom: 20, marginTop: 10 },
  greeting: { color: 'gray', fontSize: 16 },
  name: { color: '#1B5E20', fontSize: 28, fontWeight: 'bold' },
  weatherCard: { backgroundColor: '#2E7D32', padding: 20, borderRadius: 15, marginBottom: 20 },
  weatherTitle: { color: 'white', fontSize: 18 },
  actionContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  actionButton: { backgroundColor: 'white', padding: 20, borderRadius: 15, flex: 1, marginHorizontal: 5, alignItems: 'center', elevation: 2 },
  actionIcon: { fontSize: 30, marginBottom: 10 },
  actionText: { color: '#1B5E20', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  reminderCard: { backgroundColor: 'white', padding: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', elevation: 1 },
  reminderIcon: { fontSize: 24, marginRight: 15 },
  reminderTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  reminderTime: { color: 'gray', marginTop: 5 }
});
