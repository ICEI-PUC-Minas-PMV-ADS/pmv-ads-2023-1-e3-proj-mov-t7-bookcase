import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { StyleSheet } from "react-native";

const Atualizar = () => {
  const [livros, setLivros] = useState([]);
  const [setModalVisible] = useState(false);
  const [livroEditando, setLivroEditando] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link_download, setLink] = useState("");
  const [error, setError] = useState("");

  const getLivros = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const response = await axios.get("http://localhost:3000/books/upload", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLivros(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  const handleEdit = (livro) => {
    setLivroEditando(livro);
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setDescricao(livro.descricao);
    setLink(livro.link_download);
    setModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.put(
        `http://localhost:3000/books/livros/${livroEditando.idlivros}`,
        {
          titulo,
          autor,
          descricao,
          link_download,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitulo("");
      setAutor("");
      setDescricao("");
      setLink("");
      setLivroEditando(null);
      setModalVisible(false);
      getLivros();
    } catch (error) {
      console.error(error);
      setError("Por favor insira informações válidas.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualizar:</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Autor"
          value={autor}
          onChangeText={setAutor}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={styles.input}
          placeholder="Link para download"
          value={link_download}
          onChangeText={setLink}
        />
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Meus livros:</Text>
      <View style={styles.livrosContainer}>
        {livros.map((livro) => (
          <TouchableOpacity
            key={livro.idlivros}
            onPress={() => handleEdit(livro)}
            style={styles.livro}
          >
            <Text style={styles.livroTitulo}>{livro.titulo}</Text>
            <Text style={styles.livroAutor}>{livro.autor}</Text>
            <Text style={styles.livroDescricao}>{livro.descricao}</Text>
            <Text style={styles.livroLink}>{livro.link_download}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 5,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  livrosContainer: {
    flex: 1,
  },
  livro: {
    backgroundColor: "#c2e1ec",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  livroTitulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  livroAutor: {
    fontSize: 16,
  },
  livroDescricao: {
    fontSize: 14,
  },
  livroLink: {
    color: "blue",
  },
  error: {
    color: "red",
    marginBottom: 16,
  },
});

export default Atualizar;
