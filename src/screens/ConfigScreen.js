import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ConfigScreen = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    retrieveToken();
  }, []);

  const handleEmailChange = (text) => {
    setNewEmail(text);
  };

  const handlePasswordChange = (text) => {
    setNewPassword(text);
  };

  const retrieveToken = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.log("Erro ao recuperar o token:", error);
    }
  };

  const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.log("Erro ao armazenar o token:", error);
    }
  };

  const handleUpdateEmail = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/update-email",
        { newEmail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert("Sucesso", "Email atualizado com sucesso!");
      setNewEmail("");

      // Limpar o token e redirecionar para a tela de login
      await AsyncStorage.removeItem("token");
      navigation.reset({
        index: 0,
        routes: [{ name: "Bookcase" }],
      });
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao atualizar o email.");
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/update-password",
        { newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Alert.alert("Sucesso", "Senha atualizada com sucesso!");
      setNewPassword("");

      // Limpar o token e redirecionar para a tela de login
      await AsyncStorage.removeItem("token");
      navigation.reset({
        index: 0,
        routes: [{ name: "Bookcase" }],
      });
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao atualizar a senha.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alteração de Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Novo email"
          onChangeText={handleEmailChange}
          value={newEmail}
        />
        <Button title="Atualizar Email" onPress={handleUpdateEmail} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Alteração de Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova senha"
          secureTextEntry
          onChangeText={handlePasswordChange}
          value={newPassword}
        />
        <Button title="Atualizar Senha" onPress={handleUpdatePassword} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f0f0f0",
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ConfigScreen;
