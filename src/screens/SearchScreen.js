import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import axios from "axios";

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://books/livros/:id/pesquisa?q=${searchQuery}`
      );
      const results = response.data;
      navigation.navigate("Home", { results });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Digite aqui sua pesquisa"
      />
      <Button title="Pesquisar" onPress={handleSearch} />
    </View>
  );
};

export default SearchScreen;
