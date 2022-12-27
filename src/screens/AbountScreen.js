import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AppHeader from "../components/AppHeader.js";

const AbountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 40 }}>
        <View style={styles.ImageBorderStyle}>
          <AppHeader></AppHeader>
          <Image
            source={require("../../assets/image/Developer.jpg")}
            style={styles.ImageStyle}
          />
          <Text style={styles.NameText}>Erdi ÖRÜN</Text>
          <Text>Junior React Native Developer</Text>
        </View>
        <View style={styles.BorderTextStyle}>
          <Text style={styles.AbountStyle}>
            QuizWord mobil uygulaması; 10 adet ingilizce kelimenin türkçe
            karşılıklarını doğru bulmanız gereken bir quiz uygulamasıdır.Her
            doğru soruda 10 puan kazanılır ve sonunda da skor ve kelimelerin
            Türkçe karşılıkları sonuç ekranında görüntülenilir.QuizWord mobil
            uygulama geliştirme dersi final ödevi için hazırlanmıştır.
            Geliştiricinin sosyal medya hesabına ve uygulamanın kodlarına
            aşağıdaki linklerden ulaşabilirsiniz.
          </Text>
        </View>
        <View style={styles.IconStyle}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://twitter.com/erdiorun");
            }}
            style={styles.LinkStyle}
          >
            <Feather name="twitter" style={styles.TwitterStyle}></Feather>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                "https://github.com/bilimerdi/English-TurkishQuizWord"
              );
            }}
            style={styles.LinkStyle}
          >
            <Feather name="github" style={styles.GitHubStyle}></Feather>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={styles.ButtonStyle}
        >
          <Text style={styles.ButtonTextStyle}>Ana Menüye Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#64DFDF",
    height: "100%",
  },
  ImageBorderStyle: {
    alignItems: "center",
    paddingLeft: 20,
    padding: 30,
    borderRadius: 10,
    marginTop: 0,
  },
  ImageStyle: {
    width: 150,
    height: 150,
  },
  NameText: {
    marginTop: 10,
    fontSize: 30,
  },
  BorderTextStyle: {
    borderRadius: 30,
    backgroundColor: "#2196F3",
    padding: 20,
    marginBottom: 10,
    /*add shadow*/
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 100,
    shadowRadius: 50.0,
    elevation: 24,
  },
  AbountStyle: {
    textAlign: "center",
    fontSize: 20,
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
  TwitterStyle: {
    color: "#00acee",
    backgroundColor: "white",
    padding: 10,
    fontSize: 30,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
    marginLeft: 100,
    marginBottom: 10,
  },
  GitHubStyle: {
    color: "#171515",
    backgroundColor: "white",
    padding: 10,
    fontSize: 30,
    width: 50,
    borderRadius: 50,
  },
  IconStyle: {
    flexDirection: "row",
  },
});

export default AbountScreen;
