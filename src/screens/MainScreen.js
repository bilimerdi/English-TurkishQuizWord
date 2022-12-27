import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#64DFDF", height: "100%" }}>
      <View style={{ padding: 40, marginTop: 15 }}>
        <View style={styles.Container}>
          <Image
            source={require("../../assets/image/images.jpeg")}
            style={styles.ImageStyle}
            borderRadius={59}
          />
        </View>
        <View style={styles.AllButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Quiz")}
            style={styles.ButtonStyle}
          >
            <Text style={styles.MainTextStyle}>BAŞLA</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Abount")}
            style={styles.ButtonStyle}
          >
            <Text style={styles.TextStyle}>HAKKIMDA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    margin: 100,
    marginBottom: 0,
  },
  ImageStyle: {
    width: "250%",
    height: "65%",
  },
  ButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#2196F3",
    width: 250,
    height: 90,
    borderRadius: 50,
    /*add shadow*/
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  AllButton: {
    alignItems: "center",
  },
  TextStyle: {
    fontSize: 35,
    fontWeight: "500",
  },
  MainTextStyle: {
    fontSize: 60,
  },
});

export default MainScreen;
