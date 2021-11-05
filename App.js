import * as React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Blockone from "./componants/blockone";
import Blockimage from "./componants/blockimage";
import Header from "./componants/header";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Inscription from "./Inscription";
import Connexion from "./Connexion";

function HomeScreen() {
  return (<ScrollView  >
    <View style={styles.container}
    >
      
      <Header/>
      <Blockone />
    
      <Blockimage />
      <Blockimage />
      <Blockimage />
      <Blockimage />
      <Blockimage />
      
      
    
  

  </View>
  </ScrollView>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0CDD8",
    alignItems: "center",
    
  },
});

function ConnexionScreen() {
  return (
    <Connexion/>
  );
}
function InscriptionScreen() {
  return (
    <Inscription/>
  );
}
function AProposScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>A propos!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      tabBarActiveTintColor: 'black',
    }}
  >
      
      <Tab.Screen name="Acceuil" component={HomeScreen}  options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Connexion" component={ConnexionScreen} options={{
          tabBarLabel: 'Connexion',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />
      {/* <Tab.Screen name="Inscription" component={InscriptionScreen} options={{
          tabBarLabel: 'Inscription',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} /> */}
      <Tab.Screen name="A propos de nous" component={AProposScreen} options={{
          tabBarLabel: 'A propos de nous ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}



