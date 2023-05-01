import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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
    <View>
      <Text>BookUpScreen</Text>
      <TextInput placeholder="Título" value={titulo} onChangeText={setTitulo} />
      <TextInput placeholder="Autor" value={autor} onChangeText={setAutor} />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        placeholder="Link para download"
        value={link_download}
        onChangeText={setLink}
      />
      <TouchableOpacity onPress={handleUpload}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible}>
        <View>
          <TextInput
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            placeholder="Autor"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />
          <TextInput
            placeholder="Link para download"
            value={link_download}
            onChangeText={setLink}
          />
          <TouchableOpacity onPress={handleUpdate}>
            <Text>Atualizar</Text>
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
export default Atualizar;
