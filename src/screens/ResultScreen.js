import React from "react";
import { View, Text, StyleSheet,SafeAreaView, ScrollView, StatusBar, TouchableOpacity  } from "react-native";
import { Feather } from "@expo/vector-icons";

const ResultScreen=({navigation})=>{
    return(
        <SafeAreaView style={styles.containerScrollView}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.AppNameText}>QUİZWORD</Text>
                    </View>
                    <View style={styles.scoreBorderStyle}>
                        <Text style={styles.scoreStyle}>SKOR</Text>
                        <Text style={styles.scoreTextStyle}>70</Text>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <View style={styles.optionBorderStyle}>
                        <View style={styles.wordStyle}>
                            <Text style={styles.textStyle}>Word 1</Text>
                        </View>
                        <Feather name="arrow-right" style={styles.arrowStyle}></Feather>
                        <View style={styles.optionStyle}>
                            <Text style={styles.textStyle}>Karşılığı 1</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Main")} style={styles.ButtonStyle}>
                        <Text style={styles.ButtonTextStyle}>Ana Menüye Dön</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
//add scrolview
    containerScrollView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor:"#64DFDF",
        height:"100%"
    },
    container:{
        marginTop:50,
        alignItems:"center",
    },
    AppNameText:{
        fontSize:60,
        marginBottom:10,
        color:"#2196F3",
        fontWeight:"800",
        borderColor:"#2196F3",
        borderWidth:1,
        paddingLeft:5,
        paddingRight:5,
        textAlign:"center",
        borderRadius:16
    },
    scoreStyle:{
        fontSize:70,
        color:"red"
    },
    scoreTextStyle:{
        fontSize:30
    },
    scoreBorderStyle:{
        borderColor:"#2196F3",
        borderWidth:3,
        marginTop:30,
        marginBottom:30,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:16
    },
    optionBorderStyle:{
        flexDirection:"row",
        marginTop:20,
    },
    arrowStyle:{
        fontSize:30,
    },
    optionStyle:{
        margin:40,
        marginLeft:30,
        marginRight:30,
        marginTop:-10,
        backgroundColor:"#2196F3",
        borderRadius:16,
        padding:15,
    },
    textStyle:{
        fontSize:30
    },
    wordStyle:{
        margin:40,
        marginLeft:30,
        marginRight:30,
        marginTop:-10,
        backgroundColor:"red",
        borderRadius:16,
        padding:15,
    },
    ButtonStyle:{
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
        backgroundColor:"#2196F3",
        width:310,
        height:70,
        borderRadius:50,
        /*add shadow*/
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    ButtonTextStyle:{
        fontSize:30,
    },
});

export default ResultScreen;