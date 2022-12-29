import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Result = ({ score }) => {
  return (
    <View style={styles.scoreBorderStyle}>
      <Text style={styles.scoreTextStyle}>PUAN: {score}</Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  scoreTextStyle: {
    fontSize: 45,
    textAlign: "center",
  },
  scoreBorderStyle: {
    margin: 100,
    marginTop: 0,
    marginBottom: 5,
    alignItems: "center",
    backgroundColor: "yellow",
    borderRadius: 16,
    padding: 15,
  },
});
