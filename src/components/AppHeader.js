import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AppHeader = () => {
  return (
    <View>
      <Text style={styles.AppNameText}>QUİZWORD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AppNameText: {
    fontSize: 60,
    marginBottom: 10,
    color: "#ab3cfc",
    fontWeight: "800",
    borderColor: "#ab3cfc",
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center",
    borderRadius: 16,
  },
});

export default AppHeader;
