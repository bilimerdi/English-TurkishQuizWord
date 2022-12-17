import React from "react";
import { Text, View, StyleSheet } from "react-native";

const AppHeader=()=>{
    return(
        <View>
            <Text style={styles.AppNameText}>QUİZWORD</Text>
        </View>
    );
};

const styles=StyleSheet.create({
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
    }
});

export default AppHeader;