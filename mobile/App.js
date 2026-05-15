import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import HomeDashboard from './src/screens/HomeDashboard';
import DiseaseDetection from './src/screens/DiseaseDetection';
import MandiRates from './src/screens/MandiRates';
import AiAssistant from './src/screens/AiAssistant'; // Pehle banaya tha
import FarmRecords from './src/screens/FarmRecords';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs (Main UI)
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerStyle: { backgroundColor: '#2E7D32' }, 
      headerTintColor: '#fff',
      tabBarActiveTintColor: '#2E7D32'
    }}>
      <Tab.Screen name="Dashboard" component={HomeDashboard} />
      <Tab.Screen name="Beemari Check" component={DiseaseDetection} />
      <Tab.Screen name="Mandi" component={MandiRates} />
      <Tab.Screen name="Khata" component={FarmRecords} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* MainApp tab navigator */}
        <Stack.Screen name="MainApp" component={MainTabs} />
        {/* AI Assistant Stack (Not in bottom tabs, accessible from Dashboard button) */}
        <Stack.Screen name="AI Madad" component={AiAssistant} options={{ headerShown: true, headerStyle: { backgroundColor: '#2E7D32' }, headerTintColor: '#fff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
