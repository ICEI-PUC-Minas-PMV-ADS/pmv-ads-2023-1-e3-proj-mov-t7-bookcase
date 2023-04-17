import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [aceitoTermos, setAceitoTermos] = useState(false);

  const cadastrarUsuario = () => {
    // aqui você pode adicionar a lógica para cadastrar o usuário
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./imagens/Novo-usuario.png")}
        ></Image>
      </View>
      <Text style={styles.label}>Seu nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />

      <Text style={styles.label}>Seu e-mail:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}>Sua senha:</Text>
      <TextInput
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />

      <Text style={styles.label}>Confirmar senha:</Text>
      <TextInput
        style={styles.input}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry={true}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox value={aceitoTermos} onValueChange={setAceitoTermos} />
        <Text style={styles.checkboxLabel}>Li e aceito os termos de uso</Text>
      </View>

      <View style={styles.botoesContainer}>
        <Button title="Cancelar" onPress={() => {}} />
        <Button title="Cadastrar" onPress={cadastrarUsuario} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginTop: 15,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
    color: "white",
  },
  input: {
    color: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    margin: 4,
    width: "80%",
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    color: "white",
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default CadastroUsuario;
