import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function FarmRecords() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Mera Khata (Records)</Text>
      
      {/* Summary Box */}
      <View style={styles.summaryBox}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Kul Kharcha</Text>
          <Text style={styles.summaryValueRed}>Rs. 45,000</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryItem}>
          <Text style={styles.summaryLabel}>Expected Aamdani</Text>
          <Text style={styles.summaryValueGreen}>Rs. 1,20,000</Text>
        </View>
      </View>

      {/* Add New Record Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.addBtnExpense}>
          <Text style={styles.btnText}>+ Naya Kharcha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addBtnIncome}>
          <Text style={styles.btnText}>+ Nayi Fasal</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Records List */}
      <Text style={styles.sectionTitle}>Haaliya Kharchay (Recent)</Text>
      
      <View style={styles.recordItem}>
        <View>
          <Text style={styles.recordTitle}>Khaad (Fertilizer) - Urea</Text>
          <Text style={styles.recordDate}>10 May 2026</Text>
        </View>
        <Text style={styles.recordAmount}>- Rs. 8,000</Text>
      </View>

      <View style={styles.recordItem}>
        <View>
          <Text style={styles.recordTitle}>Tractor Kiraya</Text>
          <Text style={styles.recordDate}>05 May 2026</Text>
        </View>
        <Text style={styles.recordAmount}>- Rs. 5,000</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F2', padding: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1B5E20', marginBottom: 20, marginTop: 10 },
  summaryBox: { backgroundColor: 'white', borderRadius: 15, padding: 20, flexDirection: 'row', justifyContent: 'space-between', elevation: 3, marginBottom: 20 },
  summaryItem: { flex: 1, alignItems: 'center' },
  divider: { width: 1, backgroundColor: '#ddd', marginHorizontal: 10 },
  summaryLabel: { color: 'gray', fontSize: 14, marginBottom: 5 },
  summaryValueRed: { color: '#D32F2F', fontSize: 18, fontWeight: 'bold' },
  summaryValueGreen: { color: '#2E7D32', fontSize: 18, fontWeight: 'bold' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  addBtnExpense: { flex: 1, backgroundColor: '#E57373', padding: 15, borderRadius: 10, marginRight: 5, alignItems: 'center' },
  addBtnIncome: { flex: 1, backgroundColor: '#81C784', padding: 15, borderRadius: 10, marginLeft: 5, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  recordItem: { backgroundColor: 'white', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderLeftWidth: 4, borderLeftColor: '#E57373' },
  recordTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  recordDate: { color: 'gray', fontSize: 12, marginTop: 4 },
  recordAmount: { fontSize: 16, fontWeight: 'bold', color: '#D32F2F' }
});
