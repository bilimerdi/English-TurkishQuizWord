import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppHeader from "../components/AppHeader";

const ResultScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <AppHeader></AppHeader>
      </View>

      <Image
        source={require("../../assets/image/tebrikler-kart-card.jpg")}
        style={styles.ImageStyle}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Main")}
        style={styles.ButtonStyle}
      >
        <Text style={styles.ButtonTextStyle}>Ana Menüye Dön</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#64DFDF",
    height: "100%",
    alignItems: "center",
  },
  ButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#2196F3",
    width: 310,
    height: 70,
    borderRadius: 50,
    /*add shadow*/
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  ButtonTextStyle: {
    fontSize: 30,
  },
  ImageStyle: {
    marginTop: 30,
    marginBottom: 50,
    height: "50%",
    width: "75%",
  },
  headerStyle: {
    marginTop: 70,
  },
});

export default ResultScreen;
