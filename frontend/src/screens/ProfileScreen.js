import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const token = "..."; // Coloque o token de autenticação aqui
      const response = await fetch("http://localhost:3000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data.user);
      } else {
        // Trate o erro de acordo com a resposta HTTP
        console.log("Erro ao obter os dados do perfil");
      }
    } catch (error) {
      // Trate o erro de conexão
      console.log("Erro de conexão");
    }
  };

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Text style={styles.label}>Nome:</Text>
          <Text>{userData.name}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text>{userData.email}</Text>
        </>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default ProfileScreen;
