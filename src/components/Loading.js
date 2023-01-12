import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View>
      <Text style={styles.loadingStyle}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingStyle: {
    marginTop: 30,
    marginBottom: 50,
    fontSize: 50,
    textAlign: "center",
    color: "#ab3cfc",
  },
});
