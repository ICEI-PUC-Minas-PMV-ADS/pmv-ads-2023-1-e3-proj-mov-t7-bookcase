import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookUpScreen = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkDownload, setLinkDownload] = useState("");

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log("Token:", token);
      const response = await axios.post(
        "http://localhost:3000/books/livros",
        {
          titulo,
          autor,
          descricao,
          link_download: linkDownload,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      // Aqui você pode exibir uma mensagem de sucesso ou redirecionar o usuário para outra tela
    } catch (error) {
      console.error(error);
      // Aqui você pode exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <View>
      <Text>Título:</Text>
      <TextInput value={titulo} onChangeText={setTitulo} />

      <Text>Autor:</Text>
      <TextInput value={autor} onChangeText={setAutor} />

      <Text>Descrição:</Text>
      <TextInput value={descricao} onChangeText={setDescricao} />

      <Text>Link de download:</Text>
      <TextInput value={linkDownload} onChangeText={setLinkDownload} />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </View>
  );
};

export default BookUpScreen;
