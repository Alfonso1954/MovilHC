import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import Navigation from "./src/navigation/Navigations";

import { enableScreens } from "react-native-screens";

// Resto de tus importaciones y código aquí

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {renderParis()}
        <Text>Bienvenue Bienvenidos</Text>
        <Text>CLUB LA SANTE-HISTORIA CLINICA</Text>
        <Text></Text>
        <StatusBar style="auto" />
        {renderConvenios()}
      </View>
      <Navigation />
    </NavigationContainer>
  );
}

function renderParis() {
  return (
    <Image
      source={require("./src/assets/Paris.png")}
      style={{ width: 75, height: 175, top: -15 }}
    />
  );
}
{
  /*const navigation = useNavigation();*/
}

function renderConvenios() {
  return (
    <Image
      source={require("./src/assets/Convenios.png")}
      style={{ width: 75, height: 175, top: -15 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
