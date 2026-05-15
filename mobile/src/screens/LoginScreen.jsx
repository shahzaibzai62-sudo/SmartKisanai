import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleLogin = () => {
    // Abhi ke liye direct Main App pe bhej rahe hain
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Smart Kisan AI 🌱</Text>
        <Text style={styles.subtitle}>Apni fasal, apna munafa</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Apna Mobile Number Likhein:</Text>
        <TextInput 
          style={styles.input}
          placeholder="0300 1234567"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login Karein</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2', justifyContent: 'center', padding: 20 },
  header: { alignItems: 'center', marginBottom: 50 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1B5E20' },
  subtitle: { fontSize: 16, color: '#2E7D32', marginTop: 5 },
  form: { backgroundColor: 'white', padding: 20, borderRadius: 15, elevation: 3 },
  label: { fontSize: 16, color: '#333', marginBottom: 10, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 15, fontSize: 18, marginBottom: 20, backgroundColor: '#fafafa' },
  button: { backgroundColor: '#F9A825', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
