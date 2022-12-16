import React from "react";
import { View, Text, StyleSheet } from "react-native";

const QuizScreen=()=>{
    return(
        <View>
            <Text style={styles.textStyle}>This is quiz screen</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    textStyle:{
        paddingTop:50,
    },
});

export default QuizScreen;