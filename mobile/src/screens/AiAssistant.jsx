import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

// NOTE: In actual app, we will use expo-av for real voice recording. 
// For now, this is the UI logic for voice toggle.

export default function AiAssistant() {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState([
    { role: 'ai', text: 'Salam! Main Smart Kisan AI hoon. Aap apni fasal ke baare mein kuch bhi pooch sakte hain.' }
  ]);
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (!query) return;
    
    // User message
    const newChat = [...chat, { role: 'user', text: query }];
    setChat(newChat);
    setQuery('');

    // Fake AI Delay
    setTimeout(() => {
      setChat([...newChat, { role: 'ai', text: 'Shukriya. Main iska behtareen hal dhoond raha hoon...' }]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Real implementation will start/stop expo-av audio recording here
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatArea} contentContainerStyle={{ paddingBottom: 20 }}>
        {chat.map((msg, index) => (
          <View key={index} style={msg.role === 'user' ? styles.userMsg : styles.aiMsg}>
            <Text style={msg.role === 'user' ? styles.userText : styles.aiText}>
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputArea}>
        {/* Voice Button */}
        <TouchableOpacity 
          style={[styles.micBtn, isRecording ? styles.micActive : null]} 
          onPress={toggleRecording}
        >
          <Text style={styles.micText}>{isRecording ? '🔴' : '🎤'}</Text>
        </TouchableOpacity>

        <TextInput 
          style={styles.input} 
          placeholder={isRecording ? "Bolna shuru karein..." : "Apna sawal likhein..."} 
          value={query}
          onChangeText={setQuery}
          editable={!isRecording}
        />
        
        <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
          <Text style={styles.sendText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2' },
  chatArea: { flex: 1, padding: 15 },
  userMsg: { alignSelf: 'flex-end', backgroundColor: '#2E7D32', padding: 15, borderRadius: 15, borderBottomRightRadius: 0, marginBottom: 15, maxWidth: '80%' },
  userText: { color: 'white', fontSize: 16 },
  aiMsg: { alignSelf: 'flex-start', backgroundColor: 'white', padding: 15, borderRadius: 15, borderBottomLeftRadius: 0, marginBottom: 15, borderWidth: 1, borderColor: '#e0e0e0', maxWidth: '85%', elevation: 1 },
  aiText: { color: '#333', fontSize: 16, lineHeight: 24 },
  inputArea: { flexDirection: 'row', padding: 10, backgroundColor: 'white', alignItems: 'center', borderTopWidth: 1, borderColor: '#eee' },
  micBtn: { backgroundColor: '#e8f5e9', padding: 12, borderRadius: 25, marginRight: 10 },
  micActive: { backgroundColor: '#ffebee' }, // Red background when recording
  micText: { fontSize: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 25, paddingHorizontal: 20, paddingVertical: 10, fontSize: 16, marginRight: 10, backgroundColor: '#fafafa' },
  sendBtn: { backgroundColor: '#F9A825', width: 45, height: 45, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  sendText: { color: 'white', fontSize: 20 }
});
