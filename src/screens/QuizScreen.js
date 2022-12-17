import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const QuizScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.questionBorderStyle}>
                <Text style={styles.questionTextStyle}>Aşağıdaki kelimenin türkçe karşılığı hangi şıkta doğru verilmiştir?</Text>
            </View>
            <View style={styles.wordBorderStyle}>
                <Text style={styles.wordTextStyle}>Word</Text>
            </View>
            <View style={styles.optionBorderStyle}>
                <TouchableOpacity style={styles.optionStyle}>
                    <Text style={styles.optionTextStyle}>Option 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionStyle}>
                    <Text style={styles.optionTextStyle}>Option 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionStyle}>
                    <Text style={styles.optionTextStyle}>Option 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionStyle}>
                    <Text style={styles.optionTextStyle}>Option 4</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        paddingTop:30,
        backgroundColor:"#64DFDF",
        height:"100%"
    },
    questionBorderStyle:{
        margin:30,
        alignItems:"center",
        backgroundColor:"#2196F3",
        borderRadius:16,
        padding:20,
    },
    questionTextStyle:{
        fontSize:35,
        textAlign:"center",
    },
    wordBorderStyle:{
        margin:100,
        marginTop:20,
        marginBottom:20,
        alignItems:"center",
        backgroundColor:"red",
        borderRadius:16,
        padding:15,
    },
    wordTextStyle:{
        fontSize:40,
        textAlign:"center",
    },
    optionBorderStyle:{
        marginTop:50
    },
    optionStyle:{
        margin:30,
        marginTop:-10,
        alignItems:"center",
        backgroundColor:"#2196F3",
        borderRadius:16,
        padding:15,
    },
    optionTextStyle:{
        fontSize:25,
        textAlign:"center",
    }
});

export default QuizScreen;