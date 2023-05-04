import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        name,
        email,
        password,
      });

      console.log(response.data);

      navigation.navigate("Bookcase");
    } catch (error) {
      console.log(error);
      setError(
        "Email ou senha incorretos. ( Campos não podem estar vazios e senhas devem conter caractere especial, um número, uma letra maiúscula e minúscula... )"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Bookcase")}>
        <Text style={styles.link}>Já possui uma conta? Faça login.</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#008080",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    marginTop: 16,
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
});

export default RegisterScreen;
