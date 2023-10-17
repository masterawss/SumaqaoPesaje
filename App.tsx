import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login/Index';
import HomeScreen from './src/screens/Home/Index';
import IngresoShowScreen from './src/screens/Ingreso/Show';
import GuiaIngresoSearchScreen from './src/screens/GuiaIngreso/Search';
import PesajeCreateScreen from './src/screens/Pesaje/Create';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    surface: 'white',
    background: 'white',
    surfaceVariant: 'white',
    primaryContainer: 'white',
    secondaryContainer: 'white',
    outlineVariant: 'white',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='home'
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: 'white',
          }
        }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="ingreso.show" component={IngresoShowScreen} />
        <Stack.Screen name="guia_ingreso.search" component={GuiaIngresoSearchScreen} />
        <Stack.Screen name="pesaje.create" component={PesajeCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
