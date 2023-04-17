import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para autenticação do usuário
    console.log(`Email: ${email}, Senha: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./imagens/Sobre.png")} style={styles.sobre} />
      </View>
      <View>
        <Image
          source={require("./imagens/Login-icon.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.logo}>BookCase</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>
      <Button
        style={styles.login}
        title="entrar"
        onPress={handleLogin}
        mode="contained"
        icon="account"
      >
        Login
      </Button>
      <Text style={styles.novoUsuario}>Novo por aqui?</Text>
      <Button
        title="cadastro"
        mode="contained"
        icon="account"
        style={styles.login}
        //falta o comando onPress
      >
        Cadastre-se
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  logo: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 8,
    width: "80%",
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginTop: 15,
  },
  login: {
    margin: 15,
    color: "blue",
  },
  novoUsuario: {
    color: "white",
    marginTop: 10,
    fontSize: 20,
  },
  header: {
    flexDirection: "row-reverse",
  },
});
