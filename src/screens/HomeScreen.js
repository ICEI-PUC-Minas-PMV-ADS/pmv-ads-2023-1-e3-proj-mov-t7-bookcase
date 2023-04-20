import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import axios from "axios";

const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3001/books/livros");
        setLivros(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title} numberOfLines={1}>
        {item.titulo}
      </Text>
      <Text style={styles.author} numberOfLines={1}>
        {item.autor}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {item.descricao}
      </Text>
      <Text style={styles.downloadLink} numberOfLines={1}>
        {item.link_download}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Barra de navegação */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <AntDesign name="setting" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Livros</Text>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Search")}
        >
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Lista de livros */}
      <FlatList
        data={livros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ width }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#fafafa",
    elevation: 2,
    maxWidth: width - 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  downloadLink: {
    marginTop: 10,
    fontSize: 14,
    color: "blue",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  navItem: {
    padding: 10,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
