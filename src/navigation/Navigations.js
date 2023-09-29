import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import LoginScreen from "../screens/Login";
import PacienteScreen from "../screens/Paciente";
import HistoriaScreen from "../screens/Historia";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Login"
        component={LoginScreen} // Asocia LoginForm con la pantalla "Login"
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Historia"
        component={HistoriaScreen}
        options={{
          tabBarLabel: "Historia",
          tabBarIcon: ({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Paciente"
        component={PacienteScreen}
        options={{
          tabBarLabel: "Paciente",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
