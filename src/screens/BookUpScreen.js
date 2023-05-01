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

  const handleDelete = async (id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.delete(`http://localhost:3000/books/livros/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
      <Button title="Delete" onPress={() => handleDelete(item.idlivros)} />
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
        Upload de Livros
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Título"
        onChangeText={(text) => setTitulo(text)}
        value={titulo}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Autor"
        onChangeText={(text) => setAutor(text)}
        value={autor}
      />
      <TextInput
        style={{
          height: 80,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Descrição"
        onChangeText={(text) => setDescricao(text)}
        value={descricao}
        multiline={true}
        numberOfLines={3}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="Link para Download"
        onChangeText={(text) => setLinkDownload(text)}
        value={linkDownload}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(item) => item.idlivros.toString()}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default BookUpScreen;
