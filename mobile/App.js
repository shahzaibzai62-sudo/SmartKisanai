import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens import (Yeh files hum aage banayenge)
import LoginScreen from './src/screens/LoginScreen';
import HomeDashboard from './src/screens/HomeDashboard';
import DiseaseDetection from './src/screens/DiseaseDetection';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tabs for Main App
function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerStyle: { backgroundColor: '#2E7D32' }, 
      headerTintColor: '#fff',
      tabBarActiveTintColor: '#2E7D32'
    }}>
      <Tab.Screen name="Dashboard" component={HomeDashboard} />
      <Tab.Screen name="Fasal Check" component={DiseaseDetection} options={{ title: 'Beemari Check' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainApp" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
