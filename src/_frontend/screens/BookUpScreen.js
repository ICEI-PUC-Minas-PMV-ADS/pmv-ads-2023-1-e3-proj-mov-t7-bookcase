import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // importação do ícone
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight, Linking } from "react-native";

const BookUpScreen = () => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linkDownload, setLinkDownload] = useState("");
  const [livros, setLivros] = useState([]);
  const navigation = useNavigation();
  const [error, setError] = useState("");

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
      setError("Erro ao cadastrar livro.");
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
    } catch (error) {
      console.error(error);
      setError("Erro ao cadastrar livro.");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#c2e1ec",
      }}
    >
      {error ? (
        <Text style={{ color: "red", marginBottom: 16 }}>{error}</Text>
      ) : null}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
        {item.titulo}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 5 }}>{item.autor}</Text>
      <Text style={{ fontSize: 14, marginBottom: 5 }}>{item.descricao}</Text>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableHighlight
          onPress={() => window.open(item.link_download, "_blank")}
          style={{ marginBottom: 10, marginRight: 20 }}
        >
          <Text style={{ color: "blue" }}>Download</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => handleDelete(item.idlivros)}>
          <Text style={{ color: "red" }}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Adicionar Livro:
      </Text>
      {error ? (
        <Text style={{ color: "red", marginBottom: 16 }}>{error}</Text>
      ) : null}
      <Ionicons
        name="cloud-upload-outline"
        size={30}
        color="black"
        onPress={Atualizar}
        style={{ marginBottom: 20, position: "absolute", right: 20 }}
      />

      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={(text) => setTitulo(text)}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
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
          borderRadius: 5,
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
          borderRadius: 5,
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
          marginBottom: 20,
          borderRadius: 5,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Adicionar</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 28, fontWeight: "bold", marginVertical: 20 }}>
        Meus Livros:
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
