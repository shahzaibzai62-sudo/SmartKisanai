import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DiseaseDetection() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fasal Ki Beemari Pehchanein</Text>
      <Text style={styles.description}>
        Apni kharab fasal ya pattey (leaf) ki tasweer lein aur hamara AI aapko beemari aur uska ilaaj batayega.
      </Text>

      <View style={styles.imageBox}>
        <Text style={styles.iconText}>📷</Text>
        <Text style={styles.uploadText}>Tasweer Upload Karein</Text>
      </View>

      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanButtonText}>AI Se Check Karein</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2', padding: 20, alignItems: 'center' },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#1B5E20', marginBottom: 10, marginTop: 20 },
  description: { textAlign: 'center', color: '#666', marginBottom: 30, fontSize: 14, lineHeight: 22 },
  imageBox: { width: '100%', height: 250, borderWidth: 2, borderColor: '#A5D6A7', borderStyle: 'dashed', borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8f5e9', marginBottom: 30 },
  iconText: { fontSize: 50, marginBottom: 10 },
  uploadText: { color: '#2E7D32', fontSize: 16, fontWeight: 'bold' },
  scanButton: { backgroundColor: '#2E7D32', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, width: '100%', alignItems: 'center' },
  scanButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
