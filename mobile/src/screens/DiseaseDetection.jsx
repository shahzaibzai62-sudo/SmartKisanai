import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function DiseaseDetection() {
  const [image, setImage] = useState(null);

  // Camera se picture lena
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Camera use karne ki ijazat dein.');
      return;
    }
    
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Gallery se picture uthana
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fasal Ki Beemari Pehchanein</Text>
      <Text style={styles.description}>
        Patte (leaf) ki tasweer lein, hamara AI aapko beemari aur ilaaj batayega.
      </Text>

      {/* Image Preview Box */}
      {image ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.previewImage} />
          <TouchableOpacity style={styles.removeBtn} onPress={() => setImage(null)}>
            <Text style={styles.removeText}>X</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.imageBox}>
          <Text style={styles.iconText}>🌿</Text>
          <Text style={styles.uploadText}>Kharab hisse ki tasweer dikhayein</Text>
        </View>
      )}

      {/* Buttons for Camera and Gallery */}
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.camBtn} onPress={takePhoto}>
          <Text style={styles.btnText}>📷 Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.galBtn} onPress={pickImage}>
          <Text style={styles.btnText}>🖼️ Gallery</Text>
        </TouchableOpacity>
      </View>

      {/* Main Scan Button */}
      <TouchableOpacity 
        style={[styles.scanButton, !image && styles.scanButtonDisabled]}
        disabled={!image}
      >
        <Text style={styles.scanButtonText}>
          {image ? 'AI Se Check Karein' : 'Pehle Tasweer Dalein'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2', padding: 20, alignItems: 'center' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 10, marginTop: 10 },
  description: { textAlign: 'center', color: '#666', marginBottom: 25, fontSize: 16, lineHeight: 24 },
  
  imageBox: { width: '100%', height: 280, borderWidth: 2, borderColor: '#A5D6A7', borderStyle: 'dashed', borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8f5e9', marginBottom: 20 },
  iconText: { fontSize: 60, marginBottom: 15 },
  uploadText: { color: '#2E7D32', fontSize: 16, fontWeight: 'bold' },
  
  imageContainer: { width: '100%', height: 280, borderRadius: 20, marginBottom: 20, overflow: 'hidden', elevation: 3 },
  previewImage: { width: '100%', height: '100%' },
  removeBtn: { position: 'absolute', top: 10, right: 10, backgroundColor: 'rgba(0,0,0,0.6)', width: 35, height: 35, borderRadius: 17.5, justifyContent: 'center', alignItems: 'center' },
  removeText: { color: 'white', fontWeight: 'bold', fontSize: 16 },

  btnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 30 },
  camBtn: { flex: 1, backgroundColor: '#43A047', padding: 15, borderRadius: 10, marginRight: 10, alignItems: 'center', elevation: 2 },
  galBtn: { flex: 1, backgroundColor: '#F9A825', padding: 15, borderRadius: 10, marginLeft: 10, alignItems: 'center', elevation: 2 },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },

  scanButton: { backgroundColor: '#1B5E20', paddingVertical: 18, borderRadius: 30, width: '100%', alignItems: 'center', elevation: 4 },
  scanButtonDisabled: { backgroundColor: '#A5D6A7', elevation: 0 },
  scanButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' }
});
