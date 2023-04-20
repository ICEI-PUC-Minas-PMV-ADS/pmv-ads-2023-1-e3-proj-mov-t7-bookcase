import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const handleLogin = async () => {
      try {
        const response = await axios.post("http://localhost:3000/auth/login", {
          email,
          password,
        });

        // Se a autenticação foi bem sucedida, navegue para a próxima tela
        if (response.status === 200) {
          navigation.navigate("Home");
        }
      } catch (err) {
        console.error(err);
        // Exiba uma mensagem de erro caso a autenticação falhe
        alert("Email ou senha incorretos");
      }
    };

    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
      <Text style={styles.title}>Bem-vindo!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.registerButtonText}>
          Não tem uma conta? Cadastre-se aqui!
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  input: {
    height: 48,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  button: {
    height: 48,
    width: "80%",
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginBottom: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerButton: {
    marginTop: 16,
  },
  registerButtonText: {
    color: "#007bff",
    fontSize: 16,
  },
});

export default LoginScreen;
