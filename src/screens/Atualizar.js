import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { StyleSheet } from "react-native";

const Atualizar = () => {
  const [livros, setLivros] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [livroEditando, setLivroEditando] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link_download, setLink] = useState("");

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

  const handleUpload = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await axios.post(
        "http://localhost:3000/books/livros",
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
      getLivros();
    } catch (error) {
      console.error(error);
    }
  };

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
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BookUpScreen</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <View>
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
      </Modal>
      {livros.map((livro) => (
        <TouchableOpacity
          key={livro.idlivros}
          onPress={() => handleEdit(livro)}
        >
          <Text>{livro.titulo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Atualizar;
