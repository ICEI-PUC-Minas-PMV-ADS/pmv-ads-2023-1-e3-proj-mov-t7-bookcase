import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // importação do ícone
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const BookUpScreen = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkDownload, setLinkDownload] = useState("");
  const [livros, setLivros] = useState([]);
  const navigation = useNavigation();

  const Atualizar = () => {
    navigation.navigate("Atualizar"); // substitua "NomeDaPagina" pelo nome da página para onde deseja navegar
  };
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

  const handleDelete = async (idlivros) => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.delete(
        `http://localhost:3000/books/livros/${idlivros}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      getLivros();
      // Aqui você pode exibir uma mensagem de sucesso ou atualizar o estado da tela
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
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Adicionar Livro
      </Text>

      <Ionicons name="albums" size={24} color="black" onPress={Atualizar} />

      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Autor"
        value={autor}
        onChangeText={(text) => setAutor(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="Link para download"
        value={linkDownload}
        onChangeText={(text) => setLinkDownload(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
        }}
      />
      <Button title="Adicionar" onPress={handleSubmit} />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 10 }}>
        Meus Livros
      </Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.idlivros.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
export default BookUpScreen;
