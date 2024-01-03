import { StyleSheet, Text, View } from 'react-native';
import React from "react"
import "react-native-gesture-handler"
import { AuthProvider } from "./src/context/authContext";
import { Navigators } from "./src/navigation/Navigators";
export default function App() {
  return (
      <AuthProvider>
        <Navigators/>
      </AuthProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
