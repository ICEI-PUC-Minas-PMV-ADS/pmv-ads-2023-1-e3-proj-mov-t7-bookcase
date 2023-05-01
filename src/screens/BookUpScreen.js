import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BookUpScreen = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkDownload, setLinkDownload] = useState("");
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    getLivros();
  }, []);

  const getLivros = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/books/upload", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      setLivros(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
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
      setTitulo("");
      setAutor("");
      setDescricao("");
      setLinkDownload("");
      getLivros();
      // Aqui você pode exibir uma mensagem de sucesso ou redirecionar o usuário para outra tela
    } catch (error) {
      console.error(error);
      // Aqui você pode exibir uma mensagem de erro para o usuário
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.titulo}</Text>
      <Text style={{ fontSize: 16 }}>{item.autor}</Text>
      <Text style={{ fontSize: 14 }}>{item.descricao}</Text>
      <Text style={{ color: "blue" }}>{item.link_download}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Título:</Text>
      <TextInput value={titulo} onChangeText={setTitulo} />

      <Text>Autor:</Text>
      <TextInput value={autor} onChangeText={setAutor} />

      <Text>Descrição:</Text>
      <TextInput value={descricao} onChangeText={setDescricao} />

      <Text>Link de download:</Text>
      <TextInput value={linkDownload} onChangeText={setLinkDownload} />

      <Button title="Cadastrar" onPress={handleSubmit} />

      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(item) => item.idlivros.toString()}
      />
    </View>
  );
};

export default BookUpScreen;
