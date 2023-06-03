import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleLogin = async () => {
    console.log("email: ", email);
    console.log("password: ", password);

    try {
      // faz login e salva o token
      const response = await axios.post("http://localhost:3000/api/login", {
        email,
        password,
      });

      console.log("response.data: ", response.data);

      const newToken = response.data.token;
      await AsyncStorage.setItem("token", newToken);

      setIsLoggedIn(true);
    } catch (error) {
      console.log("error: ", error);
      setError("Email ou senha incorretos.");
    }
  };

  if (isLoggedIn) {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color="#008080" />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Não tem uma conta? Cadastre-se aqui."
          onPress={() => navigation.navigate("Register")}
          color="#ccc"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: "80%",
  },
  buttonContainer: {
    marginTop: 16,
    width: "80%",
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
});

export default LoginScreen;
