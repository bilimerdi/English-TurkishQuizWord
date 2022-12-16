import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,Linking } from "react-native";
import { Feather } from "@expo/vector-icons";

const AbountScreen=({navigation})=>{
        return(
        <View style={styles.container}>
            <View style={{padding:40,marginTop:80}}>
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={()=>{Linking.openURL("https://twitter.com/erdiorun");}} 
                    style={styles.LinkStyle}>
                        <Feather name="twitter" style={styles.TwitterStyle}></Feather>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL("https://github.com/bilimerdi/English-Turkish-Word-Game");}} 
                    style={styles.LinkStyle}>
                        <Feather name="github" style={styles.GitHubStyle}></Feather>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("Main")} style={styles.ButtonStyle}>
                    <Text style={styles.ButtonTextStyle}>Ana Menüye Dön</Text>
                </TouchableOpacity>       
            </View>
        </View>

        
    );
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#64DFDF",
        height:"100%",
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
    TwitterStyle:{
        color:"#00acee",
        backgroundColor:"white",
        padding:10,
        fontSize:20,
        width:40,
        borderRadius:50,
        marginRight:20,
        marginLeft:100,
        marginBottom:20,
    },
    GitHubStyle:{
        color:"#171515",
        backgroundColor:"white",
        padding:10,
        fontSize:20,
        width:40,
        borderRadius:50,
    },
    IconStyle:{
        flexDirection:"row",
    },

});

export default AbountScreen;